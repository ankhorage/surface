import React from 'react';

import type { AccordionContextValue } from '../../../../types/accordion.js';

export const AccordionContext = React.createContext<AccordionContextValue | null>(null);
