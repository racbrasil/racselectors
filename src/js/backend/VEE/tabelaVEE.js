const TabelaVEE = {

    'EPV01': {
        'R744': {
            0: { '-40': 1.08, '-30': 0.98, '-20': 0.81, '-10': 0.71 },
            '-5': { '-40': 1.04, '-30': 0.96, '-20': 0.76, '-10': 0.65 }
        },
        'R134A': {
            25: { '-30': 0.30, '-25': 0.30, '-20': 0.29, '-15': 0.29, '-10': 0.28, '-5': 0.28, '0': 0.23, '5': 0.21 },
            30: { '-30': 0.32, '-25': 0.32, '-20': 0.32, '-15': 0.32, '-10': 0.30, '-5': 0.29, '0': 0.29, '5': 0.28 },
            35: { '-30': 0.33, '-25': 0.32, '-20': 0.32, '-15': 0.32, '-10': 0.32, '-5': 0.32, '0': 0.30, '5': 0.30 },
            40: { '-30': 0.33, '-25': 0.33, '-20': 0.33, '-15': 0.33, '-10': 0.33, '-5': 0.32, '0': 0.32, '5': 0.32 },
            45: { '-30': 0.34, '-25': 0.34, '-20': 0.34, '-15': 0.33, '-10': 0.33, '-5': 0.33, '0': 0.33, '5': 0.33 }
        },
        'R22': {
            25: { '-40': 0.37, '-35': 0.37, '-30': 0.37, '-25': 0.37, '-20': 0.36, '-15': 0.36, '-10': 0.36, '-5': 0.36, '0': 0.34, '5': 0.32 },
            30: { '-40': 0.38, '-35': 0.38, '-30': 0.37, '-25': 0.37, '-20': 0.37, '-15': 0.37, '-10': 0.37, '-5': 0.36, '0': 0.36, '5': 0.36 },
            35: { '-40': 0.40, '-35': 0.39, '-30': 0.39, '-25': 0.39, '-20': 0.38, '-15': 0.38, '-10': 0.37, '-5': 0.37, '0': 0.37, '5': 0.36 },
            40: { '-40': 0.42, '-35': 0.42, '-30': 0.41, '-25': 0.40, '-20': 0.40, '-15': 0.39, '-10': 0.39, '-5': 0.38, '0': 0.37, '5': 0.37 },
            45: { '-40': 0.42, '-35': 0.42, '-30': 0.42, '-25': 0.42, '-20': 0.42, '-15': 0.42, '-10': 0.41, '-5': 0.40, '0': 0.39, '5': 0.38 }
        },
        'R404A': {
            25: { '-40': 0.30, '-35': 0.30, '-30': 0.30, '-25': 0.30, '-20': 0.29, '-15': 0.30, '-10': 0.30, '-5': 0.29, '0': 0.29, '5': 0.27 },
            30: { '-40': 0.29, '-35': 0.29, '-30': 0.29, '-25': 0.30, '-20': 0.30, '-15': 0.30, '-10': 0.30, '-5': 0.30, '0': 0.30, '5': 0.29 },
            35: { '-40': 0.28, '-35': 0.28, '-30': 0.28, '-25': 0.29, '-20': 0.29, '-15': 0.29, '-10': 0.30, '-5': 0.30, '0': 0.30, '5': 0.30 },
            40: { '-40': 0.27, '-35': 0.27, '-30': 0.28, '-25': 0.28, '-20': 0.28, '-15': 0.28, '-10': 0.29, '-5': 0.29, '0': 0.29, '5': 0.30 },
            45: { '-40': 0.26, '-35': 0.26, '-30': 0.26, '-25': 0.27, '-20': 0.27, '-15': 0.27, '-10': 0.28, '-5': 0.28, '0': 0.29, '5': 0.29 }
        },
        'R407C': {
            25: { '-40': 0.41, '-35': 0.41, '-30': 0.41, '-25': 0.40, '-20': 0.40, '-15': 0.40, '-10': 0.39, '-5': 0.39, '0': 0.39, '5': 0.36 },
            30: { '-40': 0.42, '-35': 0.42, '-30': 0.41, '-25': 0.41, '-20': 0.41, '-15': 0.41, '-10': 0.40, '-5': 0.40, '0': 0.39, '5': 0.39 },
            35: { '-40': 0.43, '-35': 0.42, '-30': 0.42, '-25': 0.42, '-20': 0.42, '-15': 0.42, '-10': 0.41, '-5': 0.41, '0': 0.40, '5': 0.40 },
            40: { '-40': 0.43, '-35': 0.43, '-30': 0.43, '-25': 0.43, '-20': 0.43, '-15': 0.43, '-10': 0.42, '-5': 0.42, '0': 0.41, '5': 0.41 },
            45: { '-40': 0.42, '-35': 0.42, '-30': 0.43, '-25': 0.43, '-20': 0.43, '-15': 0.43, '-10': 0.43, '-5': 0.43, '0': 0.43, '5': 0.42 }
        },
        'R507A': {
            25: { '-40': 0.30, '-35': 0.30, '-30': 0.30, '-25': 0.30, '-20': 0.30, '-15': 0.30, '-10': 0.30, '-5': 0.29, '0': 0.29, '5': 0.27 },
            30: { '-40': 0.29, '-35': 0.29, '-30': 0.29, '-25': 0.29, '-20': 0.30, '-15': 0.30, '-10': 0.30, '-5': 0.30, '0': 0.30, '5': 0.29 },
            35: { '-40': 0.28, '-35': 0.28, '-30': 0.28, '-25': 0.28, '-20': 0.29, '-15': 0.29, '-10': 0.29, '-5': 0.30, '0': 0.30, '5': 0.30 },
            40: { '-40': 0.27, '-35': 0.27, '-30': 0.27, '-25': 0.28, '-20': 0.28, '-15': 0.28, '-10': 0.28, '-5': 0.29, '0': 0.29, '5': 0.30 },
            45: { '-40': 0.26, '-35': 0.26, '-30': 0.25, '-25': 0.26, '-20': 0.26, '-15': 0.27, '-10': 0.28, '-5': 0.28, '0': 0.28, '5': 0.29 }
        }
    },
    'EPV02': {
        'R744': {
            0: { '-40': 2.69, '-30': 2.47, '-20': 2.02, '-10': 1.77 },
            '-5': { '-40': 2.59, '-30': 2.41, '-20': 1.89, '-10': 1.62 }
        },
        'R134A': {
            25: { '-30': 0.84, '-25': 0.83, '-20': 0.82, '-15': 0.80, '-10': 0.78, '-5': 0.76, '0': 0.67, '5': 0.62 },
            30: { '-30': 0.90, '-25': 0.90, '-20': 0.90, '-15': 0.90, '-10': 0.83, '-5': 0.81, '0': 0.79, '5': 0.76 },
            35: { '-30': 0.90, '-25': 0.90, '-20': 0.90, '-15': 0.90, '-10': 0.90, '-5': 0.90, '0': 0.85, '5': 0.82 },
            40: { '-30': 0.90, '-25': 0.90, '-20': 0.90, '-15': 0.90, '-10': 0.90, '-5': 0.90, '0': 0.90, '5': 0.90 },
            45: { '-30': 0.90, '-25': 0.90, '-20': 0.90, '-15': 0.90, '-10': 0.90, '-5': 0.90, '0': 0.90, '5': 0.90 }
        },
        'R22': {
            25: { '-40': 1.12, '-35': 1.11, '-30': 1.09, '-25': 1.07, '-20': 1.05, '-15': 1.02, '-10': 0.99, '-5': 0.96, '0': 0.92, '5': 0.88 },
            30: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.15, '-20': 1.12, '-15': 1.10, '-10': 1.07, '-5': 1.04, '0': 1.00, '5': 0.95 },
            35: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.12, '0': 1.08, '5': 1.05 },
            40: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.20, '0': 1.20, '5': 1.18 },
            45: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.20, '0': 1.20, '5': 1.15 }
        },
        'R404A': {
            25: { '-40': 0.89, '-35': 0.91, '-30': 0.93, '-25': 0.95, '-20': 0.83, '-15': 0.79, '-10': 0.76, '-5': 0.80, '0': 0.80, '5': 0.72 },
            30: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.86, '-20': 0.89, '-15': 0.92, '-10': 0.85, '-5': 0.81, '0': 0.76, '5': 0.80 },
            35: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.86, '-5': 0.86, '0': 0.95, '5': 0.80 },
            40: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.80, '-5': 0.80, '0': 0.80, '5': 0.89 },
            45: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.80, '-5': 0.80, '0': 0.80, '5': 0.80 }
        },
        'R407C': {
            25: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.13, '-20': 1.10, '-15': 1.07, '-10': 1.10, '-5': 1.10, '0': 1.10, '5': 1.01 },
            30: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.13, '-5': 1.09, '0': 1.10, '5': 1.10 },
            35: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.20, '0': 1.14, '5': 1.09 },
            40: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.20, '0': 1.20, '5': 1.20 },
            45: { '-40': 1.20, '-35': 1.20, '-30': 1.20, '-25': 1.20, '-20': 1.20, '-15': 1.20, '-10': 1.20, '-5': 1.20, '0': 1.20, '5': 1.20 }
        },
        'R507A': {
            25: { '-40': 0.87, '-35': 0.89, '-30': 0.91, '-25': 0.94, '-20': 0.84, '-15': 0.80, '-10': 0.77, '-5': 0.80, '0': 0.80, '5': 0.73 },
            30: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.88, '-15': 0.91, '-10': 0.94, '-5': 0.81, '0': 0.77, '5': 0.80 },
            35: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.80, '-5': 0.89, '0': 0.93, '5': 0.81 },
            40: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.80, '-5': 0.80, '0': 0.80, '5': 0.88 },
            45: { '-40': 0.80, '-35': 0.80, '-30': 0.80, '-25': 0.80, '-20': 0.80, '-15': 0.80, '-10': 0.80, '-5': 0.80, '0': 0.80, '5': 0.80 }
        }
    },
    'EPV03': {
        'R744': {
            0: {'-40': 4.57, '-30': 4.28, '-20': 3.73, '-10': 3.32},
            '-5': {'-40': 4.51, '-30': 4.23, '-20': 3.57, '-10': 3.12}
        },
        'R134A': {
            25: { '-30': 1.28, '-25': 1.26, '-20': 1.23, '-15': 1.20, '-10': 1.17, '-5': 1.12, '0': 1.01, '5': 0.92 },
            30: { '-30': 1.40, '-25': 1.40, '-20': 1.40, '-15': 1.40, '-10': 1.27, '-5': 1.23, '0': 1.18, '5': 1.12 },
            35: { '-30': 1.35, '-25': 1.40, '-20': 1.40, '-15': 1.40, '-10': 1.40, '-5': 1.40, '0': 1.29, '5': 1.24 },
            40: { '-30': 1.42, '-25': 1.41, '-20': 1.39, '-15': 1.38, '-10': 1.36, '-5': 1.40, '0': 1.40, '5': 1.40 },
            45: { '-30': 1.50, '-25': 1.50, '-20': 1.50, '-15': 1.45, '-10': 1.43, '-5': 1.41, '0': 1.38, '5': 1.36 }
        },
        'R22': {
            25: { '-40': 1.80, '-35': 1.80, '-30': 1.80, '-25': 1.80, '-20': 1.70, '-15': 1.65, '-10': 1.59, '-5': 1.52, '0': 1.45, '5': 1.36 },
            30: { '-40': 1.80, '-35': 1.78, '-30': 1.76, '-25': 1.80, '-20': 1.80, '-15': 1.80, '-10': 1.80, '-5': 1.67, '0': 1.59, '5': 1.51 },
            35: { '-40': 1.90, '-35': 1.90, '-30': 1.85, '-25': 1.83, '-20': 1.81, '-15': 1.78, '-10': 1.75, '-5': 1.80, '0': 1.80, '5': 1.74 },
            40: { '-40': 1.87, '-35': 1.85, '-30': 1.85, '-25': 1.90, '-20': 1.90, '-15': 1.90, '-10': 1.84, '-5': 1.81, '0': 1.77, '5': 1.77 },
            45: { '-40': 1.87, '-35': 1.95, '-30': 1.93, '-25': 1.91, '-20': 1.89, '-15': 1.87, '-10': 1.85, '-5': 1.90, '0': 1.90, '5': 1.81 }
        },
        'R404A': {
            25: { '-40': 1.40, '-35': 1.40, '-30': 1.40, '-25': 1.40, '-20': 1.33, '-15': 1.29, '-10': 1.26, '-5': 1.30, '0': 1.30, '5': 1.14 },
            30: { '-40': 1.40, '-35': 1.42, '-30': 1.44, '-25': 1.40, '-20': 1.40, '-15': 1.40, '-10': 1.35, '-5': 1.31, '0': 1.26, '5': 1.30 },
            35: { '-40': 1.30, '-35': 1.30, '-30': 1.30, '-25': 1.37, '-20': 1.39, '-15': 1.42, '-10': 1.40, '-5': 1.40, '0': 1.40, '5': 1.30 },
            40: { '-40': 1.20, '-35': 1.32, '-30': 1.34, '-25': 1.30, '-20': 1.30, '-15': 1.30, '-10': 1.35, '-5': 1.40, '0': 1.44, '5': 1.40 },
            45: { '-40': 1.23, '-35': 1.25, '-30': 1.27, '-25': 1.29, '-20': 1.32, '-15': 1.30, '-10': 1.30, '-5': 1.30, '0': 1.37, '5': 1.42 }
        },
        'R407C': {
            25: { '-40': 1.90, '-35': 1.90, '-30': 1.90, '-25': 1.76, '-20': 1.71, '-15': 1.65, '-10': 1.70, '-5': 1.70, '0': 1.70, '5': 1.52 },
            30: { '-40': 1.87, '-35': 1.85, '-30': 1.90, '-25': 1.90, '-20': 1.90, '-15': 1.90, '-10': 1.75, '-5': 1.68, '0': 1.70, '5': 1.70 },
            35: { '-40': 2.00, '-35': 1.95, '-30': 1.93, '-25': 1.91, '-20': 1.88, '-15': 1.85, '-10': 1.90, '-5': 1.90, '0': 1.77, '5': 1.68 },
            40: { '-40': 2.04, '-35': 2.00, '-30': 2.00, '-25': 2.00, '-20': 2.00, '-15': 2.00, '-10': 1.92, '-5': 1.88, '0': 1.90, '5': 1.90 },
            45: { '-40': 1.92, '-35': 1.94, '-30': 1.96, '-25': 1.98, '-20': 2.01, '-15': 2.04, '-10': 2.00, '-5': 2.00, '0': 2.20, '5': 1.90 }
        },
        'R507A': {
            25: { '-40': 1.40, '-35': 1.40, '-30': 1.40, '-25': 1.40, '-20': 1.34, '-15': 1.30, '-10': 1.27, '-5': 1.30, '0': 1.30, '5': 1.15 },
            30: { '-40': 1.39, '-35': 1.41, '-30': 1.43, '-25': 1.45, '-20': 1.40, '-15': 1.40, '-10': 1.40, '-5': 1.31, '0': 1.27, '5': 1.30 },
            35: { '-40': 1.30, '-35': 1.30, '-30': 1.30, '-25': 1.35, '-20': 1.38, '-15': 1.41, '-10': 1.38, '-5': 1.40, '0': 1.40, '5': 1.31 },
            40: { '-40': 1.26, '-35': 1.30, '-30': 1.32, '-25': 1.35, '-20': 1.30, '-15': 1.30, '-10': 1.30, '-5': 1.38, '0': 1.43, '5': 1.40 },
            45: { '-40': 1.23, '-35': 1.25, '-30': 1.20, '-25': 1.23, '-20': 1.25, '-15': 1.29, '-10': 1.32, '-5': 1.30, '0': 1.30, '5': 1.36 }
        }
    },
    'EPV04': {
        'R744': {
            0: { '-40': 5.95, '-30': 5.54, '-20': 4.68, '-10': 4.14},
            '-5': { '-40': 5.81, '-30': 5.44, '-20': 4.44, '-10': 3.84}
        },
        'R134A': {
            25: { '-30': 1.98, '-25': 1.96, '-20': 1.93, '-15': 1.90, '-10': 1.87, '-5': 1.82, '0': 1.65, '5': 1.53 },
            30: { '-30': 2.09, '-25': 2.06, '-20': 2.04, '-15': 2.01, '-10': 1.97, '-5': 1.93, '0': 1.88, '5': 1.82 },
            35: { '-30': 2.30, '-25': 2.18, '-20': 2.15, '-15': 2.12, '-10': 2.09, '-5': 2.04, '0': 1.99, '5': 1.94 },
            40: { '-30': 2.30, '-25': 2.30, '-20': 2.30, '-15': 2.30, '-10': 2.30, '-5': 2.17, '0': 2.12, '5': 2.07 },
            45: { '-30': 2.29, '-25': 2.28, '-20': 2.26, '-15': 2.30, '-10': 2.30, '-5': 2.30, '0': 2.30, '5': 2.30 }
        },
        'R22': {
            25: { '-40': 2.82, '-35': 2.81, '-30': 2.79, '-25': 2.77, '-20': 2.70, '-15': 2.65, '-10': 2.59, '-5': 2.52, '0': 2.37, '5': 2.24 },
            30: { '-40': 2.90, '-35': 2.88, '-30': 2.86, '-25': 2.85, '-20': 2.82, '-15': 2.80, '-10': 2.77, '-5': 2.67, '0': 2.60, '5': 2.51 },
            35: { '-40': 3.00, '-35': 3.00, '-30': 2.95, '-25': 3.93, '-20': 3.91, '-15': 3.88, '-10': 2.85, '-5': 2.82, '0': 2.78, '5': 2.75 },
            40: { '-40': 3.00, '-35': 3.00, '-30': 3.00, '-25': 3.00, '-20': 3.00, '-15': 3.00, '-10': 2.94, '-5': 2.91, '0': 2.87, '5': 2.83 },
            45: { '-40': 3.00, '-35': 3.00, '-30': 3.00, '-25': 3.00, '-20': 3.00, '-15': 3.00, '-10': 3.00, '-5': 3.00, '0': 3.00, '5': 2.92 }
        },
        'R404A': {
            25: { '-40': 2.10, '-35': 2.10, '-30': 2.10, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.02, '0': 1.97, '5': 1.84 },
            30: { '-40': 2.10, '-35': 2.10, '-30': 2.10, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.10, '0': 2.10, '5': 2.01 },
            35: { '-40': 2.10, '-35': 2.12, '-30': 2.14, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.10, '0': 2.10, '5': 2.10 },
            40: { '-40': 2.00, '-35': 2.02, '-30': 2.04, '-25': 2.06, '-20': 2.09, '-15': 2.12, '-10': 2.10, '-5': 2.10, '0': 2.10, '5': 2.10 },
            45: { '-40': 1.93, '-35': 1.95, '-30': 1.97, '-25': 1.99, '-20': 2.02, '-15': 2.05, '-10': 2.09, '-5': 2.13, '0': 2.10, '5': 2.10 }
        },
        'R407C': {
            25: { '-40': 2.89, '-35': 2.87, '-30': 2.85, '-25': 2.83, '-20': 2.80, '-15': 2.77, '-10': 2.62, '-5': 2.51, '0': 2.38, '5': 2.41 },
            30: { '-40': 3.00, '-35': 3.00, '-30': 2.93, '-25': 2.91, '-20': 2.89, '-15': 2.86, '-10': 2.83, '-5': 2.79, '0': 2.63, '5': 2.49 },
            35: { '-40': 3.00, '-35': 3.00, '-30': 3.00, '-25': 3.00, '-20': 3.00, '-15': 3.00, '-10': 2.92, '-5': 2.88, '0': 2.84, '5': 2.73 },
            40: { '-40': 3.00, '-35': 3.00, '-30': 3.00, '-25': 3.00, '-20': 3.00, '-15': 3.00, '-10': 3.00, '-5': 3.00, '0': 2.94, '5': 2.80 },
            45: { '-40': 3.00, '-35': 3.00, '-30': 3.00, '-25': 3.00, '-20': 3.00, '-15': 3.00, '-10': 3.00, '-5': 3.00, '0': 3.00, '5': 3.00 }
        },
        'R507A': {
            25: { '-40': 2.10, '-35': 2.10, '-30': 2.10, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.03, '0': 1.98, '5': 1.85 },
            30: { '-40': 2.10, '-35': 2.10, '-30': 2.10, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.10, '0': 2.10, '5': 2.02 },
            35: { '-40': 2.09, '-35': 2.11, '-30': 2.13, '-25': 2.10, '-20': 2.10, '-15': 2.10, '-10': 2.10, '-5': 2.10, '0': 2.10, '5': 2.10 },
            40: { '-40': 1.96, '-35': 2.00, '-30': 2.02, '-25': 2.05, '-20': 2.07, '-15': 2.10, '-10': 2.14, '-5': 2.10, '0': 2.10, '5': 2.10 },
            45: { '-40': 1.93, '-35': 1.95, '-30': 1.90, '-25': 1.93, '-20': 1.96, '-15': 1.99, '-10': 2.02, '-5': 2.06, '0': 2.11, '5': 2.10 }
        }
    },
    'EPV05': {
        'R744': {
            0: {'-40': 9.35, '-30': 8.75, '-20': 7.38, '-10': 6.51},
            '-5': {'-40': 9.13, '-30': 8.59, '-20': 6.99, '-10': 6.04}
        },
        'R134A': {
            25: { '-30': 3.16, '-25': 3.12, '-20': 3.07, '-15': 3.00, '-10': 2.93, '-5': 2.84, '0': 2.62, '5': 2.45 },
            30: { '-30': 3.39, '-25': 3.36, '-20': 3.34, '-15': 3.31, '-10': 3.14, '-5': 3.05, '0': 2.96, '5': 2.84 },
            35: { '-30': 3.55, '-25': 3.48, '-20': 3.45, '-15': 3.42, '-10': 3.39, '-5': 3.34, '0': 3.19, '5': 3.07 },
            40: { '-30': 3.62, '-25': 3.61, '-20': 3.59, '-15': 3.58, '-10': 3.56, '-5': 3.47, '0': 3.42, '5': 3.37 },
            45: { '-30': 3.69, '-25': 3.68, '-20': 3.66, '-15': 3.65, '-10': 3.63, '-5': 3.61, '0': 3.58, '5': 3.56 }
        },
        'R22': {
            25: { '-40': 4.44, '-35': 4.41, '-30': 4.38, '-25': 4.34, '-20': 4.25, '-15': 4.17, '-10': 4.08, '-5': 3.98, '0': 3.72, '5': 3.50 },
            30: { '-40': 4.60, '-35': 4.51, '-30': 4.56, '-25': 4.49, '-20': 4.45, '-15': 4.40, '-10': 4.34, '-5': 4.21, '0': 4.09, '5': 3.96 },
            35: { '-40': 4.68, '-35': 4.66, '-30': 4.65, '-25': 4.63, '-20': 4.61, '-15': 4.58, '-10': 4.55, '-5': 4.43, '0': 4.36, '5': 4.35 },
            40: { '-40': 4.77, '-35': 4.75, '-30': 4.75, '-25': 4.72, '-20': 4.69, '-15': 4.67, '-10': 4.64, '-5': 4.61, '0': 4.57, '5': 4.44 },
            45: { '-40': 4.90, '-35': 4.85, '-30': 4.83, '-25': 4.81, '-20': 4.79, '-15': 4.77, '-10': 4.74, '-5': 4.70, '0': 4.67, '5': 4.55 }
        },
        'R404A': {
            25: { '-40': 3.40, '-35': 3.40, '-30': 3.40, '-25': 3.40, '-20': 3.33, '-15': 3.29, '-10': 3.26, '-5': 3.14, '0': 3.05, '5': 2.94 },
            30: { '-40': 3.40, '-35': 3.42, '-30': 3.44, '-25': 3.40, '-20': 3.40, '-15': 3.40, '-10': 3.35, '-5': 3.31, '0': 3.26, '5': 3.12 },
            35: { '-40': 3.30, '-35': 3.30, '-30': 3.30, '-25': 3.37, '-20': 3.39, '-15': 3.42, '-10': 3.40, '-5': 3.40, '0': 3.40, '5': 3.30 },
            40: { '-40': 3.30, '-35': 3.34, '-30': 3.38, '-25': 3.30, '-20': 3.30, '-15': 3.30, '-10': 3.35, '-5': 3.40, '0': 3.44, '5': 3.40 },
            45: { '-40': 3.16, '-35': 3.20, '-30': 3.24, '-25': 3.29, '-20': 3.34, '-15': 3.30, '-10': 3.30, '-5': 3.30, '0': 3.37, '5': 3.42 }
        },
        'R407C': {
            25: { '-40': 4.69, '-35': 4.67, '-30': 4.65, '-25': 4.56, '-20': 4.51, '-15': 4.45, '-10': 4.21, '-5': 4.02, '0': 3.80, '5': 3.82 },
            30: { '-40': 4.77, '-35': 4.75, '-30': 4.73, '-25': 4.71, '-20': 4.69, '-15': 4.66, '-10': 4.55, '-5': 4.48, '0': 4.22, '5': 3.98 },
            35: { '-40': 4.90, '-35': 4.84, '-30': 4.83, '-25': 4.81, '-20': 4.78, '-15': 4.75, '-10': 4.72, '-5': 4.68, '0': 4.57, '5': 4.48 },
            40: { '-40': 4.90, '-35': 4.90, '-30': 4.90, '-25': 4.90, '-20': 4.90, '-15': 4.90, '-10': 4.82, '-5': 4.78, '0': 4.74, '5': 4.69 },
            45: { '-40': 4.90, '-35': 4.90, '-30': 4.90, '-25': 4.90, '-20': 4.90, '-15': 4.90, '-10': 4.90, '-5': 4.90, '0': 4.90, '5': 4.80 }
        },
        'R507A': {
            25: { '-40': 3.40, '-35': 3.40, '-30': 3.40, '-25': 3.40, '-20': 3.34, '-15': 3.30, '-10': 3.27, '-5': 3.15, '0': 3.06, '5': 2.95 },
            30: { '-40': 3.39, '-35': 3.41, '-30': 3.43, '-25': 3.45, '-20': 3.40, '-15': 3.40, '-10': 3.40, '-5': 3.31, '0': 3.27, '5': 3.13 },
            35: { '-40': 3.30, '-35': 3.30, '-30': 3.30, '-25': 3.35, '-20': 3.38, '-15': 3.41, '-10': 3.45, '-5': 3.40, '0': 3.40, '5': 3.31 },
            40: { '-40': 3.23, '-35': 3.30, '-30': 3.34, '-25': 3.39, '-20': 3.30, '-15': 3.30, '-10': 3.30, '-5': 3.38, '0': 3.43, '5': 3.40 },
            45: { '-40': 3.16, '-35': 3.20, '-30': 3.11, '-25': 3.16, '-20': 3.21, '-15': 3.27, '-10': 3.35, '-5': 3.30, '0': 3.30, '5': 3.36 }
        }
    },
    'EPV06': {
        'R744': {
            0: { '-40': 16.19, '-30': 15.15, '-20': 12.84, '-10': 11.34},
            '-5': { '-40': 15.83, '-30': 14.88, '-20': 12.17, '-10': 10.52}
        },
        'R134A': {
            25: { '-30': 5.00, '-25': 4.95, '-20': 4.88, '-15': 4.81, '-10': 4.71, '-5': 4.61, '0': 4.10, '5': 3.79 },
            30: { '-30': 5.27, '-25': 5.23, '-20': 5.18, '-15': 5.11, '-10': 4.97, '-5': 4.87, '0': 4.75, '5': 4.60 },
            35: { '-30': 5.60, '-25': 5.46, '-20': 5.41, '-15': 5.35, '-10': 5.27, '-5': 5.19, '0': 5.04, '5': 4.89 },
            40: { '-30': 5.73, '-25': 5.71, '-20': 5.68, '-15': 5.65, '-10': 5.62, '-5': 5.45, '0': 5.35, '5': 5.23 },
            45: { '-30': 5.90, '-25': 5.90, '-20': 5.90, '-15': 5.80, '-10': 5.76, '-5': 5.72, '0': 5.67, '5': 5.61 }
        },
        'R22': {
            25: { '-40': 6.96, '-35': 6.92, '-30': 6.87, '-25': 6.81, '-20': 6.65, '-15': 6.52, '-10': 6.37, '-5': 6.21, '0': 5.86, '5': 5.56 },
            30: { '-40': 7.19, '-35': 7.14, '-30': 7.09, '-25': 7.04, '-20': 6.97, '-15': 6.90, '-10': 6.81, '-5': 6.58, '0': 6.39, '5': 6.17 },
            35: { '-40': 7.48, '-35': 7.46, '-30': 7.34, '-25': 7.28, '-20': 7.22, '-15': 7.14, '-10': 7.05, '-5': 6.95, '0': 6.84, '5': 6.80 },
            40: { '-40': 7.57, '-35': 7.55, '-30': 7.55, '-25': 7.52, '-20': 7.49, '-15': 7.47, '-10': 7.32, '-5': 7.22, '0': 7.10, '5': 7.00 },
            45: { '-40': 7.70, '-35': 7.65, '-30': 7.63, '-25': 7.61, '-20': 7.59, '-15': 7.57, '-10': 7.54, '-5': 7.50, '0': 7.47, '5': 4.55 }
        },
        'R404A': {
            25: { '-40': 5.30, '-35': 5.30, '-30': 5.30, '-25': 5.30, '-20': 5.23, '-15': 5.19, '-10': 5.16, '-5': 4.95, '0': 4.82, '5': 4.58 },
            30: { '-40': 5.30, '-35': 5.30, '-30': 5.30, '-25': 5.30, '-20': 5.30, '-15': 5.30, '-10': 5.25, '-5': 5.21, '0': 5.16, '5': 4.92 },
            35: { '-40': 5.31, '-35': 5.35, '-30': 5.39, '-25': 5.30, '-20': 5.30, '-15': 5.30, '-10': 5.30, '-5': 5.30, '0': 5.30, '5': 5.20 },
            40: { '-40': 5.10, '-35': 5.14, '-30': 5.18, '-25': 5.22, '-20': 5.28, '-15': 5.34, '-10': 5.30, '-5': 5.30, '0': 5.30, '5': 5.30 },
            45: { '-40': 4.96, '-35': 5.00, '-30': 5.04, '-25': 5.09, '-20': 5.14, '-15': 5.20, '-10': 5.27, '-5': 5.35, '0': 5.30, '5': 5.30 }
        },
        'R407C': {
            25: { '-40': 7.39, '-35': 7.37, '-30': 7.35, '-25': 7.19, '-20': 7.11, '-15': 7.03, '-10': 6.69, '-5': 6.42, '0': 6.12, '5': 6.01 },
            30: { '-40': 7.44, '-35': 7.41, '-30': 7.43, '-25': 7.41, '-20': 7.39, '-15': 7.36, '-10': 7.18, '-5': 7.06, '0': 6.71, '5': 6.37 },
            35: { '-40': 7.70, '-35': 7.59, '-30': 7.55, '-25': 7.51, '-20': 7.46, '-15': 7.40, '-10': 7.42, '-5': 7.38, '0': 7.21, '5': 7.06 },
            40: { '-40': 7.74, '-35': 7.70, '-30': 7.70, '-25': 7.70, '-20': 7.70, '-15': 7.70, '-10': 7.50, '-5': 7.46, '0': 7.74, '5': 7.39 },
            45: { '-40': 7.62, '-35': 7.64, '-30': 7.66, '-25': 7.68, '-20': 7.70, '-15': 7.74, '-10': 7.70, '-5': 7.70, '0': 7.70, '5': 7.50 }
        },
        'R507A': {
            25: { '-40': 5.30, '-35': 5.30, '-30': 5.30, '-25': 5.30, '-20': 5.24, '-15': 5.20, '-10': 5.17, '-5': 4.98, '0': 4.84, '5': 4.84 },
            30: { '-40': 5.30, '-35': 5.30, '-30': 5.30, '-25': 5.30, '-20': 5.30, '-15': 5.30, '-10': 5.30, '-5': 5.21, '0': 5.17, '5': 4.95 },
            35: { '-40': 5.28, '-35': 5.32, '-30': 5.36, '-25': 5.30, '-20': 5.30, '-15': 5.30, '-10': 5.30, '-5': 5.30, '0': 5.30, '5': 5.21 },
            40: { '-40': 5.06, '-35': 5.10, '-30': 5.14, '-25': 5.19, '-20': 5.25, '-15': 5.31, '-10': 5.38, '-5': 5.30, '0': 5.30, '5': 5.30 },
            45: { '-40': 4.96, '-35': 5.00, '-30': 4.91, '-25': 4.96, '-20': 5.01, '-15': 5.07, '-10': 5.15, '-5': 5.23, '0': 5.32, '5': 5.30 }
        }
    },
    'EPV07': {
        'R744': {
            0: { '-40': 22.01, '-30': 20.61, '-20': 17.45, '-10': 15.42},
            '-5': { '-40': 21.53, '-30': 20.24, '-20': 16.53, '-10': 14.31 }
        },
        'R134A': {
            25: { '-30': 7.97, '-25': 7.87, '-20': 7.75, '-15': 7.61, '-10': 7.44, '-5': 7.25, '0': 6.52, '5': 6.03 },
            30: { '-30': 8.46, '-25': 8.41, '-20': 8.35, '-15': 8.27, '-10': 7.92, '-5': 7.72, '0': 7.50, '5': 7.24 },
            35: { '-30': 8.85, '-25': 8.70, '-20': 8.64, '-15': 8.56, '-10': 8.47, '-5': 8.36, '0': 8.03, '5': 7.77 },
            40: { '-30': 9.05, '-25': 9.02, '-20': 8.98, '-15': 8.93, '-10': 8.87, '-5': 8.68, '0': 8.56, '5': 8.42 },
            45: { '-30': 9.29, '-25': 9.28, '-20': 9.26, '-15': 9.15, '-10': 9.09, '-5': 9.03, '0': 8.95, '5': 8.87 }
        },
        'R22': {
            25: { '-40': 11.11, '-35': 11.03, '-30': 10.95, '-25': 10.86, '-20': 10.60, '-15': 10.39, '-10': 10.16, '-5': 9.89, '0': 9.28, '5': 8.76 },
            30: { '-40': 11.49, '-35': 11.44, '-30': 11.39, '-25': 11.23, '-20': 11.12, '-15': 10.99, '-10': 10.84, '-5': 10.48, '0': 10.18, '5': 9.83 },
            35: { '-40': 11.73, '-35': 11.69, '-30': 11.64, '-25': 11.58, '-20': 11.52, '-15': 11.44, '-10': 11.35, '-5': 11.08, '0': 10.89, '5': 10.86 },
            40: { '-40': 12.07, '-35': 12.05, '-30': 12.05, '-25': 11.85, '-20': 11.78, '-15': 11.71, '-10': 11.62, '-5': 11.52, '0': 11.40, '5': 11.97 },
            45: { '-40': 12.16, '-35': 12.15, '-30': 12.13, '-25': 12.11, '-20': 12.09, '-15': 12.07, '-10': 11.91, '-5': 11.81, '0': 11.70, '5': 11.63 }
        },
        'R404A': {
            25: { '-40': 8.41, '-35': 8.39, '-30': 8.37, '-25': 8.35, '-20': 8.25, '-15': 8.19, '-10': 8.12, '-5': 7.87, '0': 7.69, '5': 7.25 },
            30: { '-40': 8.50, '-35': 8.52, '-30': 8.54, '-25': 8.44, '-20': 8.41, '-15': 8.38, '-10': 8.29, '-5': 8.21, '0': 8.12, '5': 7.83 },
            35: { '-40': 8.41, '-35': 8.45, '-30': 8.49, '-25': 8.47, '-20': 8.49, '-15': 8.52, '-10': 8.44, '-5': 8.40, '0': 8.35, '5': 8.21 },
            40: { '-40': 8.20, '-35': 8.29, '-30': 8.39, '-25': 8.32, '-20': 8.38, '-15': 8.44, '-10': 8.46, '-5': 8.50, '0': 8.54, '5': 8.11 },
            45: { '-40': 7.86, '-35': 7.95, '-30': 8.05, '-25': 8.17, '-20': 8.30, '-15': 8.30, '-10': 8.37, '-5': 8.45, '0': 8.47, '5': 8.52 }
        },
        'R407C': {
            25: { '-40': 11.66, '-35': 11.61, '-30': 11.55, '-25': 11.42, '-20': 11.32, '-15': 11.20, '-10': 10.60, '-5': 10.14, '0': 9.92, '5': 9.55 },
            30: { '-40': 11.94, '-35': 11.91, '-30': 11.80, '-25': 11.74, '-20': 11.66, '-15': 11.58, '-10': 11.40, '-5': 11.25, '0': 10.64, '5': 10.05 },
            35: { '-40': 12.20, '-35': 12.09, '-30': 12.05, '-25': 12.01, '-20': 11.96, '-15': 11.90, '-10': 11.75, '-5': 11.64, '0': 11.45, '5': 11.25 },
            40: { '-40': 12.24, '-35': 12.20, '-30': 12.20, '-25': 12.20, '-20': 12.20, '-15': 12.20, '-10': 12.04, '-5': 11.96, '0': 11.82, '5': 11.67 },
            45: { '-40': 12.12, '-35': 12.14, '-30': 12.16, '-25': 12.18, '-20': 12.24, '-15': 12.24, '-10': 12.20, '-5': 12.20, '0': 12.20, '5': 12.00 }
        },
        'R507A': {
            25: { '-40': 8.43, '-35': 8.41, '-30': 8.39, '-25': 8.36, '-20': 8.27, '-15': 8.21, '-10': 8.13, '-5': 7.90, '0': 7.72, '5': 7.72 },
            30: { '-40': 8.49, '-35': 8.51, '-30': 8.53, '-25': 8.55, '-20': 8.42, '-15': 8.39, '-10': 8.36, '-5': 8.23, '0': 8.14, '5': 7.86 },
            35: { '-40': 8.38, '-35': 8.42, '-30': 8.46, '-25': 8.45, '-20': 8.48, '-15': 8.51, '-10': 8.55, '-5': 8.41, '0': 8.37, '5': 8.23 },
            40: { '-40': 8.11, '-35': 8.21, '-30': 8.31, '-25': 8.43, '-20': 8.35, '-15': 8.41, '-10': 8.48, '-5': 8.48, '0': 8.53, '5': 8.42 },
            45: { '-40': 7.86, '-35': 7.95, '-30': 7.72, '-25': 7.84, '-20': 7.97, '-15': 8.13, '-10': 8.31, '-5': 8.33, '0': 8.42, '5': 8.46 }
        }
    },
    'EPV08': {
        'R744': {
            0: { '-40': 35.22, '-30': 33.02, '-20': 27.96, '-10': 24.72},
            '-5': { '-40': 34.46, '-30': 32.43, '-20': 26.51, '-10': 22.95 }
        },
        'R134A': {
            25: { '-30': 12.67, '-25': 12.52, '-20': 12.33, '-15': 12.12, '-10': 11.86, '-5': 11.56, '0': 10.39, '5': 9.91 },
            30: { '-30': 13.44, '-25': 13.34, '-20': 13.22, '-15': 13.08, '-10': 12.59, '-5': 12.29, '0': 11.95, '5': 11.54 },
            35: { '-30': 14.21, '-25': 13.87, '-20': 13.75, '-15': 13.61, '-10': 13.44, '-5': 13.55, '0': 12.76, '5': 12.36 },
            40: { '-30': 14.46, '-25': 14.42, '-20': 14.37, '-15': 14.31, '-10': 14.23, '-5': 13.83, '0': 13.61, '5': 13.35 },
            45: { '-30': 14.78, '-25': 14.75, '-20': 14.73, '-15': 14.59, '-10': 14.52, '-5': 14.43, '0': 14.34, '5': 14.22 }
        },
        'R22': {
            25: { '-40': 17.77, '-35': 17.65, '-30': 17.52, '-25': 17.37, '-20': 16.95, '-15': 16.62, '-10': 16.23, '-5': 15.80, '0': 14.84, '5': 14.02 },
            30: { '-40': 18.38, '-35': 18.30, '-30': 18.22, '-25': 17.96, '-20': 17.79, '-15': 17.59, '-10': 17.35, '-5': 16.76, '0': 16.27, '5': 15.70 },
            35: { '-40': 18.81, '-35': 18.75, '-30': 18.63, '-25': 18.53, '-20': 18.43, '-15': 18.30, '-10': 18.15, '-5': 17.70, '0': 17.73, '5': 17.12 },
            40: { '-40': 19.23, '-35': 19.20, '-30': 19.20, '-25': 18.96, '-20': 18.88, '-15': 18.78, '-10': 18.60, '-5': 18.43, '0': 18.24, '5': 18.97 },
            45: { '-40': 19.57, '-35': 19.40, '-30': 19.37, '-25': 19.33, '-20': 19.29, '-15': 12.23, '-10': 19.05, '-5': 18.92, '0': 18.77, '5': 18.12 }
        },
        'R404A': {
            25: { '-40': 13.50, '-35': 13.50, '-30': 13.50, '-25': 13.50, '-20': 13.28, '-15': 13.18, '-10': 13.08, '-5': 12.63, '0': 12.31, '5': 11.63 },
            30: { '-40': 13.50, '-35': 13.52, '-30': 13.54, '-25': 13.50, '-20': 13.50, '-15': 13.50, '-10': 13.34, '-5': 13.22, '0': 13.08, '5': 12.56 },
            35: { '-40': 13.41, '-35': 13.47, '-30': 13.53, '-25': 13.47, '-20': 13.49, '-15': 13.52, '-10': 13.50, '-5': 13.50, '0': 13.50, '5': 13.21 },
            40: { '-40': 13.10, '-35': 13.23, '-30': 13.37, '-25': 13.28, '-20': 13.36, '-15': 13.46, '-10': 13.46, '-5': 13.50, '0': 13.54, '5': 13.50 },
            45: { '-40': 12.62, '-35': 12.76, '-30': 12.89, '-25': 13.06, '-20': 13.24, '-15': 13.25, '-10': 13.36, '-5': 13.48, '0': 13.47, '5': 13.52 }
        },
        'R407C': {
            25: { '-40': 18.76, '-35': 18.71, '-30': 18.65, '-25': 17.80, '-20': 17.45, '-15': 17.05, '-10': 17.17, '-5': 17.01, '0': 16.84, '5': 15.52 },
            30: { '-40': 18.98, '-35': 18.91, '-30': 18.90, '-25': 18.84, '-20': 18.76, '-15': 18.68, '-10': 17.76, '-5': 17.23, '0': 17.18, '5': 16.98 },
            35: { '-40': 19.50, '-35': 19.28, '-30': 19.21, '-25': 19.12, '-20': 19.02, '-15': 18.91, '-10': 18.45, '-5': 18.74, '0': 17.92, '5': 17.23 },
            40: { '-40': 19.54, '-35': 19.50, '-30': 19.50, '-25': 19.50, '-20': 19.50, '-15': 19.18, '-10': 19.03, '-5': 19.02, '0': 18.95, '5': 18.77 },
            45: { '-40': 19.20, '-35': 19.27, '-30': 19.34, '-25': 19.43, '-20': 19.52, '-15': 19.64, '-10': 19.50, '-5': 19.50, '0': 19.50, '5': 19.10 }
        },
        'R507A': {
            25: { '-40': 13.50, '-35': 13.50, '-30': 13.50, '-25': 13.50, '-20': 13.31, '-15': 13.21, '-10': 13.10, '-5': 12.68, '0': 12.36, '5': 12.36 },
            30: { '-40': 13.49, '-35': 13.51, '-30': 13.53, '-25': 13.55, '-20': 13.50, '-15': 13.50, '-10': 13.50, '-5': 13.24, '0': 13.10, '5': 12.61 },
            35: { '-40': 13.37, '-35': 13.42, '-30': 13.48, '-25': 13.45, '-20': 13.48, '-15': 13.51, '-10': 13.55, '-5': 13.50, '0': 13.50, '5': 13.24 },
            40: { '-40': 12.97, '-35': 13.11, '-30': 13.25, '-25': 13.42, '-20': 13.32, '-15': 13.41, '-10': 13.52, '-5': 13.48, '0': 13.53, '5': 13.50 },
            45: { '-40': 12.62, '-35': 12.76, '-30': 12.43, '-25': 12.59, '-20': 12.79, '-15': 13.01, '-10': 13.26, '-5': 13.29, '0': 13.43, '5': 13.46 }
        }
    }

}

module.exports = TabelaVEE;