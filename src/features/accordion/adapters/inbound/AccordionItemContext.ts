import React from 'react';

import type { AccordionItemContextValue } from '../../../../types/accordion.js';

export const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null);
