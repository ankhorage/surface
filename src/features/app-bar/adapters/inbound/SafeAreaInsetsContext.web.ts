import React from 'react';

/*** Browser-safe fallback for optional safe-area insets. */
export const SafeAreaInsetsContext = React.createContext<{
  bottom: number;
  left: number;
  right: number;
  top: number;
} | null>(null);
