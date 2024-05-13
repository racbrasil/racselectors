const TabelaESV = {

    'ESV13': {
        'R410A': {
            30: { '-30': 5.71, '-20': 5.63, '-10': 5.41, '-5': 5.24, '0': 5.02, '5': 4.73, '10': 4.38 },
            35: { '-30': 5.73, '-20': 5.7, '-10': 5.54, '-5': 5.41, '0': 5.22, '5': 5.00, '10': 4.72 },
            38: { '-30': 5.73, '-20': 5.7, '-10': 5.58, '-5': 5.46, '0': 5.31, '5': 5.12, '10': 4.87 },
            40: { '-30': 5.7, '-20': 5.7, '-10': 5.59, '-5': 5.49, '0': 5.36, '5': 5.17, '10': 4.93 },
            45: { '-30': 5.61, '-20': 5.63, '-10': 5.58, '-5': 5.49, '0': 5.39, '5': 5.26, '10': 5.07 },
            50: { '-30': 5.42, '-20': 5.49, '-10': 5.48, '-5': 5.42, '0': 5.36, '5': 5.24, '10': 5.1 }
        },
        'R407C': {
            30: { '-30': 4.66, '-20': 4.66, '-10': 4.55, '-5': 4.43, '0': 4.28, '5': 4.06, '10': 3.79 },
            35: { '-30': 4.75, '-20': 4.77, '-10': 4.7, '-5': 4.61, '0': 4.5, '5': 4.65, '10': 4.12 },
            38: { '-30': 4.77, '-20': 4.6, '-10': 4.77, '-5': 4.7, '0': 4.6, '5': 4.46, '10': 4.28 },
            40: { '-30': 4.77, '-20': 4.83, '-10': 4.8, '-5': 4.75, '0': 4.66, '5': 4.56, '10': 4.38 },
            45: { '-30': 4.77, '-20': 4.85, '-10': 4.85, '-5': 4.83, '0': 4.77, '5': 4.68, '10': 4.56 },
            50: { '-30': 4.7, '-20': 4.82, '-10': 4.87, '-5': 4.85, '0': 4.82, '5': 4.77, '10': 4.68 }
        },
        'R22': {
            30: { '-30': 4.68, '-20': 4.61, '-10': 4.44, '-5': 4.31, '0': 4.14, '5': 3.92, '10': 3.63 },
            35: { '-30': 4.78, '-20': 4.75, '-10': 4.63, '-5': 4.53, '0': 4.39, '5': 4.21, '10': 3.97 },
            38: { '-30': 4.83, '-20': 4.82, '-10': 4.72, '-5': 4.63, '0': 4.51, '5': 4.36, '10': 4.14 },
            40: { '-30': 4.87, '-20': 4.85, '-10': 4.77, '-5': 4.7, '0': 4.58, '5': 4.44, '10': 4.26 },
            45: { '-30': 4.9, '-20': 4.92, '-10': 4.87, '-5': 4.82, '0': 4.73, '5': 4.61, '10': 4.46 },
            50: { '-30': 4.9, '-20': 4.95, '-10': 4.93, '-5': 4.9, '0': 4.83, '5': 4.75, '10': 4.63 }
        },
        'R134A': {
            30: { '-30': 3.41, '-20': 3.45, '-10': 3.4, '-5': 3.33, '0': 3.23, '5': 3.08, '10': 2.89 },
            35: { '-30': 3.46, '-20': 3.53, '-10': 3.52, '-5': 3.46, '0': 3.4, '5': 3.3, '10': 3.14 },
            38: { '-30': 3.5, '-20': 3.57, '-10': 3.57, '-5': 3.53, '0': 3.48, '5': 3.4, '10': 3.28 },
            40: { '-30': 3.5, '-20': 3.58, '-10': 3.6, '-5': 3.58, '0': 3.53, '5': 3.46, '10': 3.35 },
            45: { '-30': 3.5, '-20': 3.6, '-10': 3.65, '-5': 3.65, '0': 3.63, '5': 3.58, '10': 3.52 },
            50: { '-30': 3.46, '-20': 3.58, '-10': 3.67, '-5': 3.68, '0': 3.68, '5': 3.67, '10': 3.62 }
        },
        'R404A': {
            30: { '-30': 3.21, '-20': 3.24, '-10': 3.19, '-5': 3.13, '0': 3.04, '5': 2.89, '10': 2.7 },
            35: { '-30': 3.18, '-20': 3.23, '-10': 3.23, '-5': 3.19, '0': 3.13, '5': 3.03, '10': 2.89 },
            38: { '-30': 3.11, '-20': 3.19, '-10': 3.21, '-5': 3.19, '0': 3.14, '5': 3.08, '10': 2.96 },
            40: { '-30': 3.06, '-20': 3.16, '-10': 3.19, '-5': 3.18, '0': 3.14, '5': 3.08, '10': 2.97 },
            45: { '-30': 2.92, '-20': 3.04, '-10': 3.11, '-5': 3.13, '0': 3.11, '5': 3.08, '10': 3.01 },
            50: { '-30': 2.72, '-20': 2.87, '-10': 2.97, '-5': 2.99, '0': 3.01, '5': 2.99, '10': 2.96 }
        }
    },

    'ESV165': {
        'R410A': {
            30: { '-30': 10.51, '-20': 10.36, '-10': 9.96, '-5': 9.65, '0': 9.25, '5': 8.72, '10': 8.06 },
            35: { '-30': 10.56, '-20': 10.49, '-10': 10.2, '-5': 9.95, '0': 9.63, '5': 9.21, '10': 8.68 },
            38: { '-30': 10.54, '-20': 10.5, '-10': 10.26, '-5': 10.06, '0': 9.78, '5': 9.42, '10': 8.95 },
            40: { '-30': 10.5, '-20': 10.49, '-10': 10.29, '-5': 10.11, '0': 9.86, '5': 9.53, '10': 9.1 },
            45: { '-30': 10.32, '-20': 10.38, '-10': 10.26, '-5': 10.13, '0': 9.93, '5': 9.68, '10': 9.33 },
            50: { '-30': 10.0, '-20': 10.11, '-10': 10.07, '-5': 9.99, '0': 9.85, '5': 9.65, '10': 9.39 }
        },
        'R407C': {
            30: { '-30': 8.6, '-20': 8.57, '-10': 8.36, '-5': 8.15, '0': 7.86, '5': 7.47, '10': 6.96 },
            35: { '-30': 8.74, '-20': 8.76, '-10': 8.64, '-5': 8.5, '0': 8.28, '5': 7.99, '10': 7.58 },
            38: { '-30': 8.78, '-20': 8.85, '-10': 8.76, '-5': 8.65, '0': 8.47, '5': 8.22, '10': 7.88 },
            40: { '-30': 8.79, '-20': 8.89, '-10': 8.83, '-5': 8.74, '0': 8.58, '5': 8.36, '10': 8.06 },
            45: { '-30': 8.76, '-20': 8.92, '-10': 8.95, '-5': 8.89, '0': 8.79, '5': 8.63, '10': 8.39 },
            50: { '-30': 8.65, '-20': 8.86, '-10': 8.95, '-5': 8.93, '0': 8.88, '5': 8.78, '10': 8.46 }
        },
        'R22': {
            30: { '-30': 8.61, '-20': 8.49, '-10': 8.18, '-5': 7.95, '0': 7.63, '5': 7.21, '10': 6.68 },
            35: { '-30': 8.81, '-20': 8.75, '-10': 8.53, '-5': 8.33, '0': 8.08, '5': 7.75, '10': 7.32 },
            38: { '-30': 8.9, '-20': 8.88, '-10': 8.7, '-5': 8.53, '0': 8.31, '5': 8.01, '10': 7.64 },
            40: { '-30': 8.95, '-20': 8.93, '-10': 8.78, '-5': 8.64, '0': 8.43, '5': 8.17, '10': 7.82 },
            45: { '-30': 9.03, '-20': 9.06, '-10': 8.97, '-5': 8.86, '0': 8.71, '5': 8.5, '10': 8.22 },
            50: { '-30': 9.04, '-20': 9.11, '-10': 9.08, '-5': 9.01, '0': 8.9, '5': 8.74, '10': 8.53 }
        },
        'R134A': {
            30: { '-30': 6.29, '-20': 6.33, '-10': 6.24, '-5': 6.11, '0': 5.93, '5': 5.67, '10': 5.31 },
            35: { '-30': 6.39, '-20': 6.49, '-10': 6.46, '-5': 6.39, '0': 6.26, '5': 6.07, '10': 5.79 },
            38: { '-30': 6.43, '-20': 6.56, '-10': 6.57, '-5': 6.51, '0': 6.42, '5': 6.26, '10': 6.04 },
            40: { '-30': 6.45, '-20': 6.58, '-10': 6.63, '-5': 6.58, '0': 6.51, '5': 6.38, '10': 6.18 },
            45: { '-30': 6.43, '-20': 6.63, '-10': 6.72, '-5': 6.72, '0': 6.68, '5': 6.6, '10': 6.46 },
            50: { '-30': 6.38, '-20': 6.6, '-10': 6.75, '-5': 6.78, '0': 6.78, '5': 6.74, '10': 6.65 }
        },
        'R404A': {
            30: { '-30': 5.9, '-20': 5.97, '-10': 5.89, '-5': 5.76, '0': 5.58, '5': 5.33, '10': 4.97 },
            35: { '-30': 5.83, '-20': 5.96, '-10': 5.95, '-5': 5.88, '0': 5.76, '5': 5.57, '10': 5.32 },
            38: { '-30': 5.74, '-20': 5.89, '-10': 5.92, '-5': 5.88, '0': 5.79, '5': 5.65, '10': 5.43 },
            40: { '-30': 5.64, '-20': 5.82, '-10': 5.88, '-5': 5.85, '0': 5.78, '5': 5.67, '10': 5.47 },
            45: { '-30': 5.39, '-20': 5.61, '-10': 5.72, '-5': 5.74, '0': 5.72, '5': 5.65, '10': 5.53 },
            50: { '-30': 5.01, '-20': 5.29, '-10': 5.46, '-5': 5.51, '0': 5.53, '5': 5.51, '10': 5.45 }
        }
    },

    'ESV18': {
        'R410A': {
            30: { '-30': 11.93, '-20': 11.77, '-10': 11.31, '-5': 10.95, '0': 10.49, '5': 9.88, '10': 9.15 },
            35: { '-30': 11.97, '-20': 11.91, '-10': 11.58, '-5': 11.31, '0': 10.91, '5': 10.45, '10': 9.86 },
            38: { '-30': 11.97, '-20': 11.91, '-10': 11.66, '-5': 11.41, '0': 11.1, '5': 10.7, '10': 10.18 },
            40: { '-30': 11.91, '-20': 11.91, '-10': 11.68, '-5': 11.47, '0': 11.2, '5': 10.8, '10': 10.3 },
            45: { '-30': 11.72, '-20': 11.77, '-10': 11.68, '-5': 11.47, '0': 11.26, '5': 10.99, '10': 10.59 },
            50: { '-30': 11.33, '-20': 11.47, '-10': 11.45, '-5': 11.33, '0': 11.2, '5': 10.95, '10': 10.66 }
        },
        'R407C': {
            30: { '-30': 9.74, '-20': 9.74, '-10': 9.51, '-5': 9.26, '0': 8.94, '5': 8.46, '10': 7.92 },
            35: { '-30': 9.93, '-20': 9.97, '-10': 9.82, '-5': 9.63, '0': 9.4, '5': 9.72, '10': 8.61 },
            38: { '-30': 9.97, '-20': 10.03, '-10': 9.97, '-5': 9.82, '0': 9.61, '5': 9.32, '10': 8.94 },
            40: { '-30': 9.97, '-20': 10.09, '-10': 10.03, '-5': 9.93, '0': 9.74, '5': 9.51, '10': 9.15 },
            45: { '-30': 9.97, '-20': 10.14, '-10': 10.14, '-5': 10.09, '0': 9.97, '5': 9.78, '10': 9.53 },
            50: { '-30': 9.82, '-20': 10.07, '-10': 10.18, '-5': 10.14, '0': 10.07, '5': 9.97, '10': 8.78 }
        },
        'R22': {
            30: { '-30': 9.78, '-20': 9.63, '-10': 9.28, '-5': 9.01, '0': 8.65, '5': 8.19, '10': 7.59 },
            35: { '-30': 9.99, '-20': 9.93, '-10': 9.68, '-5': 9.47, '0': 9.17, '5': 8.8, '10': 8.3 },
            38: { '-30': 10.09, '-20': 10.07, '-10': 9.86, '-5': 9.68, '0': 9.42, '5': 9.11, '10': 8.65 },
            40: { '-30': 10.18, '-20': 10.14, '-10': 9.97, '-5': 9.82, '0': 9.57, '5': 9.28, '10': 8.9 },
            45: { '-30': 10.24, '-20': 10.28, '-10': 10.18, '-5': 10.07, '0': 9.88, '5': 9.63, '10': 9.32 },
            50: { '-30': 10.24, '-20': 10.34, '-10': 10.3, '-5': 10.24, '0': 10.09, '5': 9.93, '10': 9.68 }
        },
        'R134A': {
            30: { '-30': 7.13, '-20': 7.21, '-10': 7.1, '-5': 6.96, '0': 6.75, '5': 6.44, '10': 6.04 },
            35: { '-30': 7.23, '-20': 7.38, '-10': 7.36, '-5': 7.23, '0': 7.1, '5': 6.9, '10': 6.56 },
            38: { '-30': 7.31, '-20': 7.46, '-10': 7.46, '-5': 7.39, '0': 7.27, '5': 7.1, '10': 6.85 },
            40: { '-30': 7.31, '-20': 7.48, '-10': 7.52, '-5': 7.48, '0': 7.38, '5': 7.23, '10': 7.0 },
            45: { '-30': 7.31, '-20': 7.52, '-10': 7.64, '-5': 7.63, '0': 7.59, '5': 7.48, '10': 7.36 },
            50: { '-30': 7.23, '-20': 7.48, '-10': 7.67, '-5': 7.89, '0': 7.69, '5': 7.67, '10': 7.56 }
        },
        'R404A': {
            30: { '-30': 6.71, '-20': 6.77, '-10': 6.67, '-5': 6.54, '0': 6.35, '5': 6.04, '10': 5.64 },
            35: { '-30': 6.65, '-20': 6.75, '-10': 6.75, '-5': 6.67, '0': 6.54, '5': 6.33, '10': 6.04 },
            38: { '-30': 6.5, '-20': 6.67, '-10': 6.71, '-5': 6.67, '0': 6.56, '5': 6.44, '10': 6.19 },
            40: { '-30': 6.39, '-20': 6.6, '-10': 6.67, '-5': 6.65, '0': 6.56, '5': 6.44, '10': 6.21 },
            45: { '-30': 6.1, '-20': 6.35, '-10': 6.5, '-5': 6.54, '0': 6.5, '5': 6.44, '10': 6.29 },
            50: { '-30': 5.68, '-20': 6.0, '-10': 6.21, '-5': 6.25, '0': 6.29, '5': 6.25, '10': 6.19 }
        }
    },

    'ESV20': {
        'R410A': {
            30: { '-30': 14.73, '-20': 14.52, '-10': 13.96, '-5': 13.52, '0': 12.95, '5': 12.2, '10': 11.3 },
            35: { '-30': 14.78, '-20': 14.71, '-10': 14.29, '-5': 13.96, '0': 13.47, '5': 12.9, '10': 12.18 },
            38: { '-30': 14.78, '-20': 14.71, '-10': 14.4, '-5': 14.09, '0': 13.7, '5': 13.21, '10': 12.56 },
            40: { '-30': 14.71, '-20': 14.71, '-10': 14.42, '-5': 14.16, '0': 13.83, '5': 13.34, '10': 12.72 },
            45: { '-30': 14.47, '-20': 14.52, '-10': 14.4, '-5': 14.16, '0': 13.91, '5': 13.57, '10': 13.08 },
            50: { '-30': 13.98, '-20': 14.16, '-10': 14.14, '-5': 13.98, '0': 13.83, '5': 13.52, '10': 13.16 }
        },
        'R407C': {
            30: { '-30': 12.02, '-20': 12.02, '-10': 11.74, '-5': 11.43, '0': 11.04, '5': 10.47, '10': 9.78 },
            35: { '-30': 12.25, '-20': 12.31, '-10': 12.13, '-5': 11.89, '0': 11.61, '5': 12.0, '10': 10.63 },
            38: { '-30': 12.31, '-20': 12.38, '-10': 12.31, '-5': 12.13, '0': 11.87, '5': 11.51, '10': 11.04 },
            40: { '-30': 12.31, '-20': 12.46, '-10': 12.38, '-5': 12.25, '0': 12.02, '5': 11.74, '10': 11.3 },
            45: { '-30': 12.31, '-20': 12.51, '-10': 12.51, '-5': 12.46, '0': 12.31, '5': 12.07, '10': 11.76 },
            50: { '-30': 12.13, '-20': 19.44, '-10': 12.56, '-5': 12.51, '0': 12.44, '5': 12.31, '10': 12.07 }
        },
        'R22': {
            30: { '-30': 12.07, '-20': 11.89, '-10': 11.45, '-5': 11.12, '0': 10.68, '5': 10.11, '10': 9.36 },
            35: { '-30': 12.33, '-20': 12.25, '-10': 11.94, '-5': 11.69, '0': 11.33, '5': 10.86, '10': 10.24 },
            38: { '-30': 12.46, '-20': 12.44, '-10': 12.18, '-5': 11.94, '0': 11.64, '5': 11.25, '10': 10.68 },
            40: { '-30': 12.56, '-20': 12.51, '-10': 12.31, '-5': 12.13, '0': 11.82, '5': 11.45, '10': 10.99 },
            45: { '-30': 12.64, '-20': 12.69, '-10': 12.56, '-5': 12.44, '0': 12.2, '5': 11.89, '10': 11.51 },
            50: { '-30': 12.64, '-20': 12.77, '-10': 12.72, '-5': 12.64, '0': 12.46, '5': 12.25, '10': 11.94 }
        },
        'R134A': {
            30: { '-30': 8.8, '-20': 8.9, '-10': 8.77, '-5': 8.59, '0': 8.33, '5': 7.95, '10': 7.46 },
            35: { '-30': 8.93, '-20': 9.11, '-10': 9.08, '-5': 8.93, '0': 8.77, '5': 8.51, '10': 8.1 },
            38: { '-30': 9.03, '-20': 9.21, '-10': 9.21, '-5': 9.11, '0': 8.98, '5': 8.77, '10': 8.46 },
            40: { '-30': 9.03, '-20': 9.24, '-10': 9.29, '-5': 9.24, '0': 9.11, '5': 8.93, '10': 8.64 },
            45: { '-30': 9.03, '-20': 9.29, '-10': 9.42, '-5': 9.42, '0': 9.36, '5': 9.24, '10': 9.08 },
            50: { '-30': 8.93, '-20': 9.24, '-10': 9.47, '-5': 9.49, '0': 9.49, '5': 9.47, '10': 9.34 }
        },
        'R404A': {
            30: { '-30': 8.28, '-20': 8.36, '-10': 8.23, '-5': 8.08, '0': 7.84, '5': 7.46, '10': 6.97 },
            35: { '-30': 8.2, '-20': 8.33, '-10': 8.33, '-5': 8.23, '0': 8.08, '5': 7.86, '10': 7.46 },
            38: { '-30': 8.02, '-20': 8.23, '-10': 8.28, '-5': 8.23, '0': 8.1, '5': 7.95, '10': 7.64 },
            40: { '-30': 7.89, '-20': 8.15, '-10': 8.23, '-5': 8.2, '0': 8.1, '5': 7.95, '10': 7.66 },
            45: { '-30': 7.53, '-20': 7.84, '-10': 8.02, '-5': 8.08, '0': 8.02, '5': 7.95, '10': 7.77 },
            50: { '-30': 7.02, '-20': 7.4, '-10': 7.66, '-5': 7.71, '0': 7.77, '5': 7.71, '10': 7.64 }
        }
    },

    'ESV24': {
        'R410A': {
            30: { '-30': 21.21, '-20': 20.92, '-10': 20.1, '-5': 19.47, '0': 18.65, '5': 17.57, '10': 16.27 },
            35: { '-30': 21.29, '-20': 21.18, '-10': 20.58, '-5': 20.1, '0': 19.39, '5': 18.58, '10': 17.53 },
            38: { '-30': 21.29, '-20': 21.18, '-10': 20.73, '-5': 20.28, '0': 19.73, '5': 19.02, '10': 18.09 },
            40: { '-30': 21.18, '-20': 21.18, '-10': 20.77, '-5': 20.4, '0': 19.91, '5': 19.21, '10': 18.32 },
            45: { '-30': 20.84, '-20': 20.92, '-10': 20.73, '-5': 20.4, '0': 20.02, '5': 19.54, '10': 18.84 },
            50: { '-30': 20.14, '-20': 20.4, '-10': 20.36, '-5': 20.14, '0': 19.91, '5': 19.47, '10': 18.95 }
        },
        'R407C': {
            30: { '-30': 17.31, '-20': 17.31, '-10': 16.9, '-5': 16.46, '0': 15.9, '5': 15.08, '10': 14.08 },
            35: { '-30': 17.65, '-20': 17.72, '-10': 17.46, '-5': 17.13, '0': 16.72, '5': 17.27, '10': 15.31 },
            38: { '-30': 17.72, '-20': 17.83, '-10': 17.72, '-5': 17.46, '0': 17.09, '5': 16.57, '10': 15.9 },
            40: { '-30': 17.72, '-20': 17.94, '-10': 17.83, '-5': 17.65, '0': 17.31, '5': 16.9, '10': 16.27 },
            45: { '-30': 17.72, '-20': 18.02, '-10': 18.02, '-5': 17.94, '0': 17.72, '5': 17.39, '10': 16.94 },
            50: { '-30': 17.46, '-20': 17.91, '-10': 18.09, '-5': 18.02, '0': 17.91, '5': 17.72, '10': 17.39 }
        },
        'R22': {
            30: { '-30': 17.39, '-20': 17.13, '-10': 16.49, '-5': 16.01, '0': 15.38, '5': 14.56, '10': 13.49 },
            35: { '-30': 17.76, '-20': 17.65, '-10': 17.2, '-5': 16.83, '0': 16.31, '5': 15.64, '10': 14.75 },
            38: { '-30': 17.94, '-20': 17.91, '-10': 17.53, '-5': 17.2, '0': 16.75, '5': 16.2, '10': 15.38 },
            40: { '-30': 18.09, '-20': 18.02, '-10': 17.72, '-5': 17.46, '0': 17.01, '5': 16.49, '10': 15.83 },
            45: { '-30': 18.2, '-20': 18.28, '-10': 18.09, '-5': 17.91, '0': 17.57, '5': 17.13, '10': 16.57 },
            50: { '-30': 18.2, '-20': 18.39, '-10': 18.32, '-5': 18.2, '0': 17.94, '5': 17.65, '10': 17.2 }
        },
        'R134A': {
            30: { '-30': 12.67, '-20': 12.82, '-10': 12.63, '-5': 12.37, '0': 12.0, '5': 11.44, '10': 10.74 },
            35: { '-30': 12.85, '-20': 13.11, '-10': 13.08, '-5': 12.85, '0': 12.63, '5': 12.26, '10': 11.67 },
            38: { '-30': 13.0, '-20': 13.26, '-10': 13.26, '-5': 13.11, '0': 12.93, '5': 12.63, '10': 12.19 },
            40: { '-30': 13.0, '-20': 13.3, '-10': 13.37, '-5': 13.3, '0': 13.11, '5': 12.85, '10': 12.45 },
            45: { '-30': 13.0, '-20': 13.37, '-10': 13.56, '-5': 13.56, '0': 13.49, '5': 13.3, '10': 13.08 },
            50: { '-30': 12.85, '-20': 13.3, '-10': 13.63, '-5': 13.67, '0': 13.67, '5': 13.63, '10': 13.45 }
        },
        'R404A': {
            30: { '-30': 11.93, '-20': 12.04, '-10': 11.85, '-5': 11.63, '0': 11.29, '5': 10.74, '10': 10.03 },
            35: { '-30': 11.81, '-20': 12.0, '-10': 12.0, '-5': 11.85, '0': 11.63, '5': 11.26, '10': 10.74 },
            38: { '-30': 11.55, '-20': 11.85, '-10': 11.93, '-5': 11.85, '0': 11.67, '5': 11.44, '10': 11.0 },
            40: { '-30': 11.37, '-20': 11.74, '-10': 11.85, '-5': 11.81, '0': 11.67, '5': 11.44, '10': 11.03 },
            45: { '-30': 10.85, '-20': 11.29, '-10': 11.55, '-5': 11.63, '0': 11.55, '5': 11.44, '10': 11.18 },
            50: { '-30': 10.1, '-20': 10.66, '-10': 11.03, '-5': 11.11, '0': 11.18, '5': 11.11, '10': 11.0 }
        }
    },

    'ESV32': {
        'R410A': {
            30: { '-30': 36.55, '-20': 35.1, '-10': 34.72, '-5': 33.55, '0': 32.2, '5': 30.36, '10': 28.04 },
            35: { '-30': 36.75, '-20': 36.46, '-10': 35.49, '-5': 34.62, '0': 33.55, '5': 32.01, '10': 30.17 },
            38: { '-30': 36.65, '-20': 36.55, '-10': 35.78, '-5': 35.01, '0': 34.04, '5': 32.78, '10': 31.14 },
            40: { '-30': 36.55, '-20': 36.55, '-10': 35.88, '-5': 35.2, '0': 34.33, '5': 33.17, '10': 31.72 },
            45: { '-30': 35.88, '-20': 36.07, '-10': 35.68, '-5': 35.3, '0': 34.62, '5': 33.65, '10': 32.49 },
            50: { '-30': 34.81, '-20': 35.2, '-10': 36.07, '-5': 34.72, '0': 34.33, '5': 33.55, '10': 32.68 }
        },
        'R407C': {
            30: { '-30': 29.88, '-20': 29.78, '-10': 29.01, '-5': 28.33, '0': 27.37, '5': 26.01, '10': 24.18 },
            35: { '-30': 30.36, '-20': 30.46, '-10': 30.07, '-5': 29.49, '0': 28.82, '5': 27.75, '10': 26.4 },
            38: { '-30': 30.46, '-20': 30.75, '-10': 30.46, '-5': 30.07, '0': 29.49, '5': 28.62, '10': 27.37 },
            40: { '-30': 30.56, '-20': 30.85, '-10': 30.75, '-5': 30.36, '0': 29.88, '5': 29.11, '10': 27.95 },
            45: { '-30': 30.46, '-20': 31.04, '-10': 31.04, '-5': 30.94, '0': 30.56, '5': 29.98, '10': 29.2 },
            50: { '-30': 30.07, '-20': 30.75, '-10': 31.14, '-5': 31.04, '0': 30.85, '5': 30.46, '10': 29.88 }
        },
        'R22': {
            30: { '-30': 29.98, '-20': 29.59, '-10': 28.53, '-5': 27.66, '0': 26.59, '5': 25.14, '10': 23.21 },
            35: { '-30': 30.65, '-20': 30.46, '-10': 29.69, '-5': 29.01, '0': 28.14, '5': 26.98, '10': 25.43 },
            38: { '-30': 30.94, '-20': 30.85, '-10': 30.27, '-5': 29.69, '0': 28.91, '5': 27.85, '10': 26.59 },
            40: { '-30': 31.14, '-20': 31.14, '-10': 30.56, '-5': 30.07, '0': 29.4, '5': 28.43, '10': 27.27 },
            45: { '-30': 31.43, '-20': 31.52, '-10': 31.23, '-5': 30.85, '0': 30.36, '5': 29.59, '10': 28.62 },
            50: { '-30': 31.43, '-20': 31.72, '-10': 31.62, '-5': 31.43, '0': 30.94, '5': 30.46, '10': 29.69 }
        },
        'R134A': {
            30: { '-30': 21.85, '-20': 22.05, '-10': 21.76, '-5': 21.27, '0': 20.69, '5': 19.73, '10': 18.47 },
            35: { '-30': 22.24, '-20': 22.63, '-10': 22.53, '-5': 22.24, '0': 21.76, '5': 21.18, '10': 20.21 },
            38: { '-30': 22.34, '-20': 22.82, '-10': 22.82, '-5': 22.72, '0': 22.34, '5': 21.76, '10': 20.98 },
            40: { '-30': 22.43, '-20': 22.82, '-10': 23.01, '-5': 22.92, '0': 22.63, '5': 22.14, '10': 21.47 },
            45: { '-30': 22.43, '-20': 23.01, '-10': 23.4, '-5': 23.4, '0': 23.3, '5': 23.01, '10': 22.53 },
            50: { '-30': 22.14, '-20': 23.01, '-10': 23.5, '-5': 23.59, '0': 23.59, '5': 23.5, '10': 23.21 }
        },
        'R404A': {
            30: { '-30': 20.6, '-20': 20.79, '-10': 20.5, '-5': 20.11, '0': 19.44, '5': 18.57, '10': 17.31 },
            35: { '-30': 20.31, '-20': 20.69, '-10': 20.69, '-5': 20.5, '0': 20.02, '5': 19.44, '10': 18.47 },
            38: { '-30': 20.02, '-20': 20.5, '-10': 20.6, '-5': 20.5, '0': 20.21, '5': 19.63, '10': 18.95 },
            40: { '-30': 19.63, '-20': 20.21, '-10': 20.4, '-5': 20.4, '0': 20.11, '5': 19.73, '10': 19.05 },
            45: { '-30': 18.76, '-20': 19.53, '-10': 19.92, '-5': 20.02, '0': 19.92, '5': 19.53, '10': 19.24 },
            50: { '-30': 17.5, '-20': 18.37, '-10': 19.05, '-5': 19.15, '0': 19.24, '5': 19.15, '10': 18.95 }
        }
    },

    'ESV40': {
        'R410A': {
            30: { '-30': 52.98, '-20': 52.28, '-10': 50.33, '-5': 48.63, '0': 46.67, '5': 44.01, '10': 40.64 },
            35: { '-30': 53.27, '-20': 52.85, '-10': 51.44, '-5': 50.18, '0': 48.63, '5': 46.4, '10': 43.73 },
            38: { '-30': 53.13, '-20': 52.98, '-10': 51.86, '-5': 50.75, '0': 49.34, '5': 47.52, '10': 45.14 },
            40: { '-30': 52.98, '-20': 52.98, '-10': 52.01, '-5': 51.02, '0': 49.76, '5': 48.08, '10': 45.98 },
            45: { '-30': 52.01, '-20': 52.28, '-10': 51.72, '-5': 51.17, '0': 50.18, '5': 48.78, '10': 47.09 },
            50: { '-30': 50.46, '-20': 51.02, '-10': 50.88, '-5': 50.33, '0': 49.76, '5': 48.63, '10': 47.37 }
        },
        'R407C': {
            30: { '-30': 43.31, '-20': 43.17, '-10': 42.05, '-5': 41.06, '0': 39.67, '5': 37.7, '10': 35.05 },
            35: { '-30': 44.01, '-20': 44.15, '-10': 43.59, '-5': 42.75, '0': 41.78, '5': 40.22, '10': 38.27 },
            38: { '-30': 44.15, '-20': 44.57, '-10': 44.15, '-5': 43.59, '0': 42.75, '5': 41.49, '10': 39.67 },
            40: { '-30': 44.3, '-20': 44.72, '-10': 44.57, '-5': 44.01, '0': 43.31, '5': 42.2, '10': 40.51 },
            45: { '-30': 44.15, '-20': 44.99, '-10': 44.99, '-5': 44.85, '0': 44.3, '5': 43.46, '10': 42.33 },
            50: { '-30': 43.59, '-20': 44.57, '-10': 45.14, '-5': 44.99, '0': 44.72, '5': 44.15, '10': 43.31 }
        },
        'R22': {
            30: { '-30': 43.46, '-20': 42.89, '-10': 41.35, '-5': 40.09, '0': 38.54, '5': 36.44, '10': 33.64 },
            35: { '-30': 44.43, '-20': 44.15, '-10': 43.04, '-5': 42.05, '0': 40.79, '5': 39.11, '10': 36.86 },
            38: { '-30': 44.85, '-20': 44.72, '-10': 43.88, '-5': 43.04, '0': 41.91, '5': 40.37, '10': 38.54 },
            40: { '-30': 45.14, '-20': 45.14, '-10': 44.3, '-5': 43.59, '0': 42.62, '5': 41.21, '10': 39.53 },
            45: { '-30': 45.56, '-20': 45.69, '-10': 45.27, '-5': 44.72, '0': 44.01, '5': 42.89, '10': 41.49 },
            50: { '-30': 45.56, '-20': 45.98, '-10': 45.83, '-5': 45.56, '0': 44.85, '5': 44.15, '10': 43.04 }
        },
        'R134A': {
            30: { '-30': 31.67, '-20': 31.96, '-10': 31.54, '-5': 30.83, '0': 29.99, '5': 28.6, '10': 26.77 },
            35: { '-30': 32.24, '-20': 32.8, '-10': 32.66, '-5': 32.24, '0': 31.54, '5': 30.7, '10': 29.29 },
            38: { '-30': 32.38, '-20': 33.08, '-10': 33.08, '-5': 32.93, '0': 32.38, '5': 31.54, '10': 30.41 },
            40: { '-30': 32.51, '-20': 33.08, '-10': 33.35, '-5': 33.22, '0': 32.8, '5': 32.09, '10': 31.12 },
            45: { '-30': 32.51, '-20': 33.35, '-10': 33.92, '-5': 33.92, '0': 33.77, '5': 33.35, '10': 32.66 },
            50: { '-30': 32.09, '-20': 33.35, '-10': 34.06, '-5': 34.19, '0': 34.19, '5': 34.06, '10': 33.64 }
        },
        'R404A': {
            30: { '-30': 29.86, '-20': 30.14, '-10': 29.72, '-5': 29.15, '0': 28.18, '5': 26.92, '10': 25.09 },
            35: { '-30': 29.44, '-20': 29.99, '-10': 29.99, '-5': 29.72, '0': 29.02, '5': 28.18, '10': 26.77 },
            38: { '-30': 29.02, '-20': 29.72, '-10': 29.86, '-5': 29.72, '0': 29.29, '5': 28.45, '10': 27.47 },
            40: { '-30': 28.45, '-20': 29.29, '-10': 29.57, '-5': 29.57, '0': 29.15, '5': 28.6, '10': 27.61 },
            45: { '-30': 27.19, '-20': 28.31, '-10': 28.87, '-5': 29.02, '0': 28.87, '5': 28.31, '10': 27.89 },
            50: { '-30': 25.37, '-20': 26.63, '-10': 27.61, '-5': 27.76, '0': 27.89, '5': 27.76, '10': 27.47 }
        }
    },

    'ESV45': {
        'R410A': {
            30: { '-30': 66.25, '-20': 65.38, '-10': 62.93, '-5': 60.81, '0': 58.37, '5': 55.03, '10': 50.83 },
            35: { '-30': 66.61, '-20': 66.09, '-10': 64.33, '-5': 62.75, '0': 60.81, '5': 58.02, '10': 54.69 },
            38: { '-30': 66.43, '-20': 66.25, '-10': 64.86, '-5': 63.46, '0': 61.7, '5': 59.42, '10': 56.45 },
            40: { '-30': 66.25, '-20': 66.25, '-10': 65.04, '-5': 63.8, '0': 62.23, '5': 60.13, '10': 57.5 },
            45: { '-30': 65.04, '-20': 65.38, '-10': 64.67, '-5': 63.99, '0': 62.75, '5': 61.0, '10': 58.89 },
            50: { '-30': 63.1, '-20': 63.8, '-10': 63.62, '-5': 62.93, '0': 62.23, '5': 60.81, '10': 59.24 }
        },
        'R407C': {
            30: { '-30': 54.16, '-20': 53.98, '-10': 52.58, '-5': 51.35, '0': 49.61, '5': 47.15, '10': 43.83 },
            35: { '-30': 55.08, '-20': 55.21, '-10': 54.51, '-5': 53.45, '0': 52.24, '5': 50.3, '10': 47.85 },
            38: { '-30': 55.21, '-20': 55.74, '-10': 55.21, '-5': 54.51, '0': 53.45, '5': 51.88, '10': 49.61 },
            40: { '-30': 55.39, '-20': 55.92, '-10': 55.74, '-5': 55.03, '0': 54.16, '5': 52.77, '10': 50.66 },
            45: { '-30': 55.21, '-20': 56.26, '-10': 56.26, '-5': 56.08, '0': 55.39, '5': 54.34, '10': 52.93 },
            50: { '-30': 54.51, '-20': 55.74, '-10': 56.45, '-5': 56.26, '0': 55.92, '5': 55.21, '10': 54.16 }
        },
        'R22': {
            30: { '-30': 54.34, '-20': 53.64, '-10': 51.71, '-5': 50.14, '0': 48.2, '5': 45.57, '10': 42.07 },
            35: { '-30': 55.56, '-20': 55.21, '-10': 53.82, '-5': 52.58, '0': 57.01, '5': 48.9, '10': 46.1 },
            38: { '-30': 56.08, '-20': 55.92, '-10': 54.87, '-5': 53.82, '0': 52.4, '5': 50.48, '10': 48.2 },
            40: { '-30': 56.45, '-20': 56.45, '-10': 55.39, '-5': 54.51, '0': 53.29, '5': 57.53, '10': 49.43 },
            45: { '-30': 56.97, '-20': 57.13, '-10': 56.61, '-5': 55.92, '0': 55.03, '5': 53.64, '10': 51.88 },
            50: { '-30': 56.97, '-20': 57.5, '-10': 57.32, '-5': 56.97, '0': 56.08, '5': 55.21, '10': 53.82 }
        },
        'R134A': {
            30: { '-30': 39.61, '-20': 39.97, '-10': 39.44, '-5': 38.55, '0': 37.5, '5': 35.76, '10': 33.48 },
            35: { '-30': 40.31, '-20': 41.02, '-10': 40.84, '-5': 40.31, '0': 39.44, '5': 38.39, '10': 36.63 },
            38: { '-30': 40.49, '-20': 41.36, '-10': 41.36, '-5': 41.18, '0': 40.49, '5': 39.44, '10': 38.03 },
            40: { '-30': 40.66, '-20': 41.36, '-10': 41.71, '-5': 41.55, '0': 41.02, '5': 40.13, '10': 38.92 },
            45: { '-30': 40.66, '-20': 41.71, '-10': 42.42, '-5': 42.42, '0': 42.23, '5': 41.71, '10': 40.84 },
            50: { '-30': 40.13, '-20': 41.71, '-10': 42.6, '-5': 42.76, '0': 42.76, '5': 42.6, '10': 42.07 }
        },
        'R404A': {
            30: { '-30': 37.34, '-20': 37.68, '-10': 37.16, '-5': 36.45, '0': 35.24, '5': 33.66, '10': 31.38 },
            35: { '-30': 36.81, '-20': 37.5, '-10': 37.5, '-5': 37.16, '0': 36.29, '5': 35.24, '10': 33.48 },
            38: { '-30': 36.29, '-20': 37.16, '-10': 37.34, '-5': 37.16, '0': 36.63, '5': 35.58, '10': 34.35 },
            40: { '-30': 35.58, '-20': 36.63, '-10': 36.98, '-5': 36.98, '0': 36.45, '5': 35.76, '10': 34.53 },
            45: { '-30': 34.01, '-20': 35.4, '-10': 36.11, '-5': 36.29, '0': 36.11, '5': 35.4, '10': 34.88 },
            50: { '-30': 31.72, '-20': 33.3, '-10': 34.53, '-5': 34.71, '0': 34.88, '5': 34.71, '10': 34.35 }
        }
    },

    'ESV55': {
        'R410A': {
            30: { '-30': 88.32, '-20': 87.16, '-10': 83.9, '-5': 81.07, '0': 77.81, '5': 73.37, '10': 67.76 },
            35: { '-30': 88.81, '-20': 88.11, '-10': 85.76, '-5': 83.66, '0': 81.07, '5': 77.35, '10': 72.91 },
            38: { '-30': 88.57, '-20': 88.32, '-10': 86.46, '-5': 84.6, '0': 82.26, '5': 79.21, '10': 75.25 },
            40: { '-30': 88.32, '-20': 88.32, '-10': 86.71, '-5': 85.06, '0': 82.96, '5': 80.16, '10': 76.65 },
            45: { '-30': 86.71, '-20': 87.16, '-10': 86.22, '-5': 85.3, '0': 83.66, '5': 81.32, '10': 78.51 },
            50: { '-30': 84.12, '-20': 85.06, '-10': 84.82, '-5': 83.9, '0': 82.96, '5': 81.07, '10': 78.97 }
        },
        'R407C': {
            30: { '-30': 72.21, '-20': 71.96, '-10': 70.1, '-5': 68.46, '0': 66.14, '5': 62.85, '10': 58.43 },
            35: { '-30': 73.37, '-20': 73.61, '-10': 72.67, '-5': 71.26, '0': 69.64, '5': 67.06, '10': 63.8 },
            38: { '-30': 73.61, '-20': 74.31, '-10': 73.61, '-5': 72.67, '0': 71.26, '5': 69.16, '10': 66.14 },
            40: { '-30': 73.85, '-20': 74.55, '-10': 74.31, '-5': 73.37, '0': 72.21, '5': 70.35, '10': 67.54 },
            45: { '-30': 73.61, '-20': 75.01, '-10': 75.01, '-5': 74.77, '0': 73.85, '5': 72.45, '10': 70.56 },
            50: { '-30': 72.67, '-20': 74.31, '-10': 75.25, '-5': 75.01, '0': 74.55, '5': 73.61, '10': 72.21 }
        },
        'R22': {
            30: { '-30': 72.45, '-20': 71.51, '-10': 68.94, '-5': 66.84, '0': 64.26, '5': 60.75, '10': 56.09 },
            35: { '-30': 74.07, '-20': 73.61, '-10': 71.75, '-5': 70.1, '0': 68.0, '5': 65.2, '10': 61.45 },
            38: { '-30': 74.77, '-20': 74.55, '-10': 73.15, '-5': 71.75, '0': 69.86, '5': 67.3, '10': 64.26 },
            40: { '-30': 75.25, '-20': 75.25, '-10': 73.85, '-5': 72.67, '0': 71.05, '5': 68.7, '10': 65.9 },
            45: { '-30': 75.95, '-20': 76.17, '-10': 75.47, '-5': 74.55, '0': 73.37, '5': 71.51, '10': 69.16 },
            50: { '-30': 75.95, '-20': 76.65, '-10': 76.41, '-5': 75.95, '0': 74.77, '5': 73.61, '10': 71.75 }
        },
        'R134A': {
            30: { '-30': 52.8, '-20': 53.28, '-10': 52.58, '-5': 51.4, '0': 50.0, '5': 47.68, '10': 44.63 },
            35: { '-30': 53.74, '-20': 54.69, '-10': 54.44, '-5': 53.74, '0': 52.58, '5': 51.18, '10': 48.84 },
            38: { '-30': 53.99, '-20': 55.15, '-10': 55.15, '-5': 54.9, '0': 53.99, '5': 52.58, '10': 50.7 },
            40: { '-30': 54.2, '-20': 55.15, '-10': 55.6, '-5': 55.39, '0': 54.69, '5': 53.5, '10': 51.88 },
            45: { '-30': 54.2, '-20': 55.6, '-10': 56.55, '-5': 56.55, '0': 56.31, '5': 55.6, '10': 54.44 },
            50: { '-30': 53.5, '-20': 55.6, '-10': 56.79, '-5': 57.01, '0': 57.01, '5': 56.79, '10': 56.09 }
        },
        'R404A': {
            30: { '-30': 49.78, '-20': 50.24, '-10': 49.54, '-5': 48.6, '0': 46.98, '5': 44.88, '10': 41.83 },
            35: { '-30': 49.08, '-20': 50.0, '-10': 50.0, '-5': 49.54, '0': 48.38, '5': 46.98, '10': 44.63 },
            38: { '-30': 48.38, '-20': 49.54, '-10': 49.78, '-5': 49.54, '0': 48.64, '5': 47.44, '10': 45.79 },
            40: { '-30': 47.44, '-20': 48.84, '-10': 49.3, '-5': 49.3, '0': 48.6, '5': 47.68, '10': 46.04 },
            45: { '-30': 45.33, '-20': 47.19, '-10': 48.14, '-5': 48.38, '0': 48.14, '5': 47.19, '10': 46.49 },
            50: { '-30': 42.29, '-20': 44.39, '-10': 46.04, '-5': 46.28, '0': 46.49, '5': 46.28, '10': 45.79 }
        }
    },

    'ESV65': {
        'R410A': {
            30: { '-30': 132.5, '-20': 130.76, '-10': 125.86, '-5': 121.62, '0': 116.73, '5': 110.06, '10': 101.65 },
            35: { '-30': 133.22, '-20': 132.17, '-10': 128.65, '-5': 125.5, '0': 121.62, '5': 116.04, '10': 109.37 },
            38: { '-30': 132.86, '-20': 132.5, '-10': 129.71, '-5': 126.91, '0': 123.4, '5': 118.83, '10': 112.88 },
            40: { '-30': 132.5, '-20': 132.5, '-10': 130.07, '-5': 127.6, '0': 124.45, '5': 120.24, '10': 114.99 },
            45: { '-30': 130.07, '-20': 130.76, '-10': 129.34, '-5': 127.97, '0': 125.5, '5': 121.98, '10': 117.78 },
            50: { '-30': 126.19, '-20': 127.6, '-10': 127.24, '-5': 125.86, '0': 124.45, '5': 121.62, '10': 118.47 }
        },
        'R407C': {
            30: { '-30': 108.32, '-20': 107.95, '-10': 105.16, '-5': 102.7, '0': 99.22, '5': 94.29, '10': 87.65 },
            35: { '-30': 110.06, '-20': 110.42, '-10': 109.01, '-5': 106.9, '0': 104.47, '5': 100.6, '10': 95.7 },
            38: { '-30': 110.42, '-20': 111.47, '-10': 110.42, '-5': 109.01, '0': 106.9, '5': 103.75, '10': 99.22 },
            40: { '-30': 110.78, '-20': 111.83, '-10': 111.47, '-5': 110.06, '0': 108.32, '5': 105.53, '10': 101.32 },
            45: { '-30': 110.42, '-20': 112.52, '-10': 112.52, '-5': 112.16, '0': 110.78, '5': 108.68, '10': 105.85 },
            50: { '-30': 109.01, '-20': 111.47, '-10': 112.88, '-5': 112.52, '0': 111.83, '5': 110.43, '10': 108.32 }
        },
        'R22': {
            30: { '-30': 108.68, '-20': 107.27, '-10': 103.42, '-5': 100.27, '0': 96.39, '5': 91.13, '10': 84.14 },
            35: { '-30': 111.11, '-20': 110.42, '-10': 107.63, '-5': 105.16, '0': 102.01, '5': 97.8, '10': 92.19 },
            38: { '-30': 112.16, '-20': 111.83, '-10': 109.73, '-5': 107.63, '0': 104.8, '5': 100.96, '10': 96.39 },
            40: { '-30': 112.88, '-20': 112.88, '-10': 110.78, '-5': 109.01, '0': 106.58, '5': 103.06, '10': 98.86 },
            45: { '-30': 113.94, '-20': 114.26, '-10': 113.21, '-5': 111.83, '0': 110.06, '5': 107.27, '10': 103.75 },
            50: { '-30': 113.94, '-20': 114.99, '-10': 114.62, '-5': 113.94, '0': 112.16, '5': 110.42, '10': 107.63 }
        },
        'R134A': {
            30: { '-30': 79.21, '-20': 79.93, '-10': 78.88, '-5': 77.11, '0': 75.0, '5': 71.52, '10': 66.96 },
            35: { '-30': 80.62, '-20': 82.04, '-10': 81.67, '-5': 80.62, '0': 78.88, '5': 76.78, '10': 73.26 },
            38: { '-30': 80.98, '-20': 82.72, '-10': 82.72, '-5': 82.36, '0': 80.98, '5': 78.88, '10': 76.05 },
            40: { '-30': 81.31, '-20': 82.72, '-10': 83.41, '-5': 83.09, '0': 82.04, '5': 80.26, '10': 77.83 },
            45: { '-30': 81.31, '-20': 83.41, '-10': 84.83, '-5': 84.83, '0': 84.46, '5': 83.41, '10': 81.67 },
            50: { '-30': 80.26, '-20': 83.41, '-10': 85.19, '-5': 85.52, '0': 85.52, '5': 85.19, '10': 84.14 }
        },
        'R404A': {
            30: { '-30': 74.68, '-20': 75.37, '-10': 74.31, '-5': 72.9, '0': 70.47, '5': 67.32, '10': 62.75 },
            35: { '-30': 73.63, '-20': 75.0, '-10': 75.0, '-5': 74.31, '0': 72.57, '5': 70.47, '10': 66.96 },
            38: { '-30': 72.57, '-20': 74.31, '-10': 74.68, '-5': 74.31, '0': 73.26, '5': 71.16, '10': 68.7 },
            40: { '-30': 71.16, '-20': 73.26, '-10': 73.95, '-5': 73.95, '0': 72.9, '5': 71.52, '10': 69.06 },
            45: { '-30': 68.01, '-20': 70.8, '-10': 72.21, '-5': 72.57, '0': 72.21, '5': 70.8, '10': 69.75 },
            50: { '-30': 63.44, '-20': 66.59, '-10': 69.06, '-5': 69.42, '0': 69.75, '5': 69.42, '10': 68.7 }
        }
    }

}

module.exports = TabelaESV;