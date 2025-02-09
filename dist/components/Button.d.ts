import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map