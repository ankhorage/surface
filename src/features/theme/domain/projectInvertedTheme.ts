import type {
  ColorContrastContext,
  ColorSelectionTarget,
  ColorSwatch,
  ColorSwatchTiePolicy,
  HexColor,
} from '@ankhorage/color-theory';
import {
  createDefaultSemanticStatusSwatches,
  parseHexColorOrThrow,
  selectColorSwatchStep,
} from '@ankhorage/color-theory';

import type {
  BorderSemantics,
  ContentSemantics,
  NeutralSemantics,
  RoleSemantics,
  SurfaceSemantics,
  SurfaceTheme,
  ThemeSemantics,
} from '../../../types/theme';
import { SURFACE_COLOR_POLICY } from '../constants';
import { createSurfaceColorDiagnosticCollector } from './createSurfaceColorDiagnosticCollector';

type Collector = ReturnType<typeof createSurfaceColorDiagnosticCollector>;

interface InverseSelection {
  collector: Collector;
  contexts: readonly ColorContrastContext[];
  tiePolicy: ColorSwatchTiePolicy;
  textTarget: ColorSelectionTarget;
  mutedTarget: ColorSelectionTarget;
  subtleTarget: ColorSelectionTarget;
  borderTarget: ColorSelectionTarget;
  neutral: ColorSwatch;
}

/*** Project normal canonical theme semantics onto the opposite surface polarity. */
export function projectInvertedTheme(theme: SurfaceTheme): SurfaceTheme {
  const collector = createSurfaceColorDiagnosticCollector();
  const lightSurface = theme.colorDiagnostics.mode === 'dark';
  const { neutral } = theme.swatches;
  const surface = resolveInverseSurface(theme, neutral, lightSurface);
  const selection = createInverseSelection(collector, surface, neutral, lightSurface);
  const content = resolveInverseContent(theme, selection);
  const border = resolveInverseBorder(theme, selection);
  const roles = resolveInverseRoles(theme, selection);
  const { neutralAction, ...semanticRoles } = roles;
  const semantics: ThemeSemantics = {
    ...theme.semantics,
    neutral: resolveInverseNeutral(theme, surface, content, border, neutral, lightSurface),
    surface,
    content,
    border,
    ...semanticRoles,
    error: roles.danger,
    action: { primary: roles.brand, neutral: neutralAction, danger: roles.danger },
  };

  return {
    ...theme,
    inverted: true,
    semantics,
    colors: {
      ...theme.colors,
      background: surface.default,
      surface: surface.default,
      text: content.default,
      textSecondary: content.muted,
      border: border.default,
    },
    colorDiagnostics: {
      ...theme.colorDiagnostics,
      selections: [...theme.colorDiagnostics.selections, ...collector.selections],
      contrasts: [...theme.colorDiagnostics.contrasts, ...collector.contrasts],
    },
  };
}

/*** Resolve inverse backgrounds from the neutral swatch of the active theme mode. */
function resolveInverseSurface(
  theme: SurfaceTheme,
  neutral: ColorSwatch,
  lightSurface: boolean,
): SurfaceSemantics {
  const base = theme.semantics.surface.inverse;
  const adjacent = lightSurface ? neutral[100] : neutral[800];
  return {
    ...theme.semantics.surface,
    default: base,
    subtle: adjacent,
    raised: adjacent,
    sunken: base,
    overlay: adjacent,
    disabled: adjacent,
    inverse: theme.semantics.surface.default,
  };
}

/*** Select swatch steps against both inverse surface levels. */
function createInverseSelection(
  collector: Collector,
  surface: SurfaceSemantics,
  neutral: ColorSwatch,
  lightSurface: boolean,
): InverseSelection {
  return {
    collector,
    neutral,
    contexts: [
      {
        id: 'inverse-surface',
        against: parseHexColorOrThrow(surface.default),
        minimumContrast: 4.5,
      },
      { id: 'inverse-subtle', against: parseHexColorOrThrow(surface.subtle), minimumContrast: 4.5 },
    ],
    tiePolicy: lightSurface ? 'higher-step' : 'lower-step',
    textTarget: { lightness: lightSurface ? 0.2 : 0.9, chroma: 0.02 },
    mutedTarget: { lightness: lightSurface ? 0.35 : 0.75, chroma: 0.02 },
    subtleTarget: { lightness: lightSurface ? 0.4 : 0.7, chroma: 0.02 },
    borderTarget: { lightness: lightSurface ? 0.45 : 0.65, chroma: 0.02 },
  };
}

/*** Resolve all surface-relative content colors against inverse backgrounds. */
function resolveInverseContent(theme: SurfaceTheme, selection: InverseSelection): ContentSemantics {
  const { neutral, primary } = theme.swatches;
  const secondary = theme.swatches.secondary ?? primary;
  return {
    default: selectText('content.default', neutral, selection.textTarget, selection),
    muted: selectText('content.muted', neutral, selection.mutedTarget, selection),
    subtle: selectText('content.subtle', neutral, selection.subtleTarget, selection),
    disabled: selectText('content.disabled', neutral, selection.subtleTarget, selection),
    icon: selectText('content.icon', neutral, selection.textTarget, selection),
    link: selectText('content.link', primary, selection.textTarget, selection),
    visited: selectText('content.visited', secondary, selection.textTarget, selection),
    inverse: theme.semantics.content.default,
  };
}

/*** Resolve separators and focus chrome against inverse backgrounds. */
function resolveInverseBorder(theme: SurfaceTheme, selection: InverseSelection): BorderSemantics {
  const { neutral } = theme.swatches;
  const outline = selection.borderTarget;
  return {
    default: selectOutline('border.default', neutral, outline, selection),
    subtle: selectOutline('border.subtle', neutral, outline, selection),
    strong: selectOutline('border.strong', neutral, outline, selection),
    divider: selectOutline('border.divider', neutral, outline, selection),
    focus: selectOutline('border.focus', theme.swatches.primary, selection.textTarget, selection),
  };
}

/*** Project only surface-relative role fields and preserve self-owned color pairs. */
function resolveInverseRoles(theme: SurfaceTheme, selection: InverseSelection) {
  const status = createDefaultSemanticStatusSwatches().swatches;
  const { semantics } = theme;
  return {
    brand: projectRole('brand', semantics.brand, theme.swatches.primary, selection),
    secondary: projectRole(
      'secondary',
      semantics.secondary,
      theme.swatches.secondary ?? theme.swatches.primary,
      selection,
    ),
    accent: projectRole(
      'accent',
      semantics.accent,
      theme.swatches.tertiary ?? theme.swatches.primary,
      selection,
    ),
    highlight: projectRole(
      'highlight',
      semantics.highlight,
      theme.swatches.quaternary ?? theme.swatches.primary,
      selection,
    ),
    danger: projectRole('danger', semantics.danger, status.danger, selection),
    success: projectRole('success', semantics.success, status.success, selection),
    warning: projectRole('warning', semantics.warning, status.warning, selection),
    info: projectRole('info', semantics.info, status.info, selection),
    neutralAction: projectRole(
      'neutral',
      semantics.action.neutral,
      theme.swatches.neutral,
      selection,
    ),
  };
}

/*** Keep opaque and soft role pairs intact while selecting inverse-safe transparent colors. */
function projectRole(
  id: string,
  role: RoleSemantics,
  swatch: ColorSwatch,
  selection: InverseSelection,
): RoleSemantics {
  return {
    ...role,
    onSurfaceText: selectText(`${id}.onSurfaceText`, swatch, selection.textTarget, selection),
    outline: selectOutline(`${id}.outline`, swatch, selection.borderTarget, selection),
  };
}

/*** Keep direct neutral semantic reads aligned with active surface polarity. */
function resolveInverseNeutral(
  theme: SurfaceTheme,
  surface: SurfaceSemantics,
  content: ContentSemantics,
  border: BorderSemantics,
  swatch: ColorSwatch,
  lightSurface: boolean,
): NeutralSemantics {
  return {
    ...theme.semantics.neutral,
    bg: surface.default,
    bgSubtle: surface.subtle,
    surface: surface.default,
    surfaceHover: lightSurface ? swatch[200] : swatch[700],
    surfaceActive: lightSurface ? swatch[300] : swatch[600],
    border: border.default,
    borderStrong: border.strong,
    divider: border.divider,
    text: content.default,
    textMuted: content.muted,
    textSubtle: content.subtle,
    disabledBg: surface.disabled,
    disabledText: content.disabled,
  };
}

/*** Select and measure inverse-surface text through Color Theory. */
function selectText(
  id: string,
  swatch: ColorSwatch,
  target: ColorSelectionTarget,
  selection: InverseSelection,
): HexColor {
  const color = selectInverseColor(id, swatch, target, selection.contexts, selection);
  for (const context of selection.contexts) {
    selection.collector.measureForeground(
      `inverse.${id}/${context.id}`,
      color,
      context.against,
      SURFACE_COLOR_POLICY.textContrast,
    );
  }
  return color;
}

/*** Select inverse-surface outlines with the UI contrast policy. */
function selectOutline(
  id: string,
  swatch: ColorSwatch,
  target: ColorSelectionTarget,
  selection: InverseSelection,
): HexColor {
  const contexts = selection.contexts.map((context) => ({
    ...context,
    minimumContrast: SURFACE_COLOR_POLICY.uiContrast,
  }));
  const color = selectInverseColor(id, swatch, target, contexts, selection);
  for (const context of contexts) {
    selection.collector.measureForeground(
      `inverse.${id}/${context.id}`,
      color,
      context.against,
      SURFACE_COLOR_POLICY.uiContrast,
    );
  }
  return color;
}

/*** Keep inverse contrast safe when a chromatic swatch cannot meet the policy. */
function selectInverseColor(
  id: string,
  swatch: ColorSwatch,
  target: ColorSelectionTarget,
  contexts: readonly ColorContrastContext[],
  selection: InverseSelection,
): HexColor {
  const result = selectColorSwatchStep(swatch, target, contexts, selection.tiePolicy);
  selection.collector.selections.push({ id: `inverse.${id}`, result });
  return (
    result.selected?.hex ??
    selection.collector.selectColor(
      `inverse.${id}.neutralFallback`,
      selection.neutral,
      target,
      contexts,
      selection.tiePolicy,
    )
  );
}
