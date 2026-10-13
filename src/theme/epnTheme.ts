export const EPN_THEME = {
  colors: {
    primary: '#0D1C33', // Azul Marino EPN (Headers, footers, fondos de modales, títulos)
    accent: '#EBB336', // Amarillo Dorado EPN (Botones de acción principal, iconos activos)
    accentText: '#8D6B20', // Texto dorado accesible sobre fondo claro (WCAG AA 4.9:1)
    surface: '#FFFFFF', // Fondo de tarjetas, modales claros, inputs
    background: '#F8F9FA', // Fondo general de pantallas
    text: '#4A4A4A', // Cuerpo de párrafos, texto descriptivo
    textMuted: '#718096', // Texto secundario / leyendas
    border: '#E2E8F0', // Bordes de tarjetas y divisores
    error: '#D62C27', // Rojo institucional para errores
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 18,
    full: 9999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  shadows: {
    card: {
      shadowColor: '#0D1C33',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 3,
    },
  },
};
