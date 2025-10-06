'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    // Background and foreground
    '--color-background': '0 0 0',    // #000000 - Solid black
    '--color-foreground': '237 237 237', // #ededed - Light text for black background
    
    // Green scale (Primary)
    '--color-green-1': '249 255 250',     // #f9fffa
    '--color-green-2': '242 252 243',     // #f2fcf3
    '--color-green-3': '225 250 228',     // #e1fae4 (50)
    '--color-green-4': '206 246 210',     // #cef6d2 (100)
    '--color-green-5': '182 239 189',     // #b6efbd (200)
    '--color-green-6': '152 230 164',     // #98e6a4 (300)
    '--color-green-7': '107 217 128',     // #6bd980 (400)
    '--color-green-8': '0 198 73',        // #00c649 (500)
    '--color-green-9': '0 213 88',        // #00d558 (600) - Primary
    '--color-green-10': '0 201 76',       // #00c94c (700)
    '--color-green-11': '0 133 30',       // #00851e (800)
    '--color-green-12': '5 64 23',         // #054017 (900)
    
    // Gray scale
    '--color-gray-1': '252 252 253',      // #fcfcfd
    '--color-gray-2': '249 249 251',      // #f9f9fb
    '--color-gray-3': '239 240 243',     // #eff0f3
    '--color-gray-4': '231 232 236',     // #e7e8ec
    '--color-gray-5': '224 225 230',     // #e0e1e6
    '--color-gray-6': '216 217 224',     // #d8d9e0
    '--color-gray-7': '205 206 215',     // #cdced7
    '--color-gray-8': '185 187 198',     // #b9bbc6
    '--color-gray-9': '139 141 152',      // #8b8d98
    '--color-gray-10': '128 130 141',    // #80828d
    '--color-gray-11': '98 99 108',       // #62636c
    '--color-gray-12': '30 31 36',        // #1e1f24
    
    // Blue scale (Info/Accent)
    '--color-blue-1': '250 253 255',     // #fafdff
    '--color-blue-2': '241 251 255',     // #f1fbff
    '--color-blue-3': '226 245 255',    // #e2f5ff (50)
    '--color-blue-4': '204 241 255',     // #ccf1ff (100)
    '--color-blue-5': '179 233 255',     // #b3e9ff (200)
    '--color-blue-6': '150 221 255',     // #96ddff (300)
    '--color-blue-7': '109 206 250',     // #6dcefa (400)
    '--color-blue-8': '0 185 246',       // #00b9f6 (500)
    '--color-blue-9': '0 194 255',       // #00c2ff (600) - Info/Accent
    '--color-blue-10': '0 183 243',      // #00b7f3 (700)
    '--color-blue-11': '0 128 179',      // #0080b3 (800)
    '--color-blue-12': '0 58 88',        // #003a58 (900)
    
    // Legacy neon colors (keeping for compatibility)
    '--color-neon-green': '0 213 88',    // #00D558 - Primary
    '--color-neon-pink': '255 46 154',   // #FF2E9A - Destructive / Cancel
    '--color-electric-blue': '0 194 255', // #00C2FF - Info / Accent
    '--color-neon-yellow': '255 230 0',  // #FFE600 - Warning / Accent
    '--color-neon-purple': '164 74 255', // #A44AFF - Tabs / UI
    '--color-black': '0 0 0',
    '--color-white': '255 255 255',

    // Primary colors - Neon Green theme
    '--color-primary-0': '240 255 244',
    '--color-primary-50': '220 255 228',
    '--color-primary-100': '187 255 204',
    '--color-primary-200': '134 255 170',
    '--color-primary-300': '81 255 136',
    '--color-primary-400': '28 255 102',
    '--color-primary-500': '0 213 88', // Main neon green
    '--color-primary-600': '0 191 79',
    '--color-primary-700': '0 170 70',
    '--color-primary-800': '0 149 61',
    '--color-primary-900': '0 128 52',
    '--color-primary-950': '0 107 43',

    /* Secondary - Electric Blue theme */
    '--color-secondary-0': '240 252 255',
    '--color-secondary-50': '224 247 255',
    '--color-secondary-100': '186 230 255',
    '--color-secondary-200': '125 208 255',
    '--color-secondary-300': '64 186 255',
    '--color-secondary-400': '3 164 255',
    '--color-secondary-500': '0 194 255', // Main electric blue
    '--color-secondary-600': '0 174 230',
    '--color-secondary-700': '0 154 204',
    '--color-secondary-800': '0 134 179',
    '--color-secondary-900': '0 114 153',
    '--color-secondary-950': '0 94 128',

    /* Tertiary - Neon Purple theme */
    '--color-tertiary-0': '250 245 255',
    '--color-tertiary-50': '242 229 255',
    '--color-tertiary-100': '233 213 255',
    '--color-tertiary-200': '209 170 255',
    '--color-tertiary-300': '180 116 255',
    '--color-tertiary-400': '157 75 255',
    '--color-tertiary-500': '164 74 255', // Main neon purple
    '--color-tertiary-600': '147 66 230',
    '--color-tertiary-700': '130 58 204',
    '--color-tertiary-800': '113 50 179',
    '--color-tertiary-900': '96 42 153',
    '--color-tertiary-950': '79 34 128',

    /* Error */
    '--color-error-0': '254 233 233',
    '--color-error-50': '254 226 226',
    '--color-error-100': '254 202 202',
    '--color-error-200': '252 165 165',
    '--color-error-300': '248 113 113',
    '--color-error-400': '239 68 68',
    '--color-error-500': '230 53 53',
    '--color-error-600': '220 38 38',
    '--color-error-700': '185 28 28',
    '--color-error-800': '153 27 27',
    '--color-error-900': '127 29 29',
    '--color-error-950': '83 19 19',

    /* Success */
    '--color-success-0': '228 255 244',
    '--color-success-50': '202 255 232',
    '--color-success-100': '162 241 192',
    '--color-success-200': '132 211 162',
    '--color-success-300': '102 181 132',
    '--color-success-400': '72 151 102',
    '--color-success-500': '52 131 82',
    '--color-success-600': '42 121 72',
    '--color-success-700': '32 111 62',
    '--color-success-800': '22 101 52',
    '--color-success-900': '20 83 45',
    '--color-success-950': '27 50 36',

    /* Warning */
    '--color-warning-0': '255 249 245',
    '--color-warning-50': '255 244 236',
    '--color-warning-100': '255 231 213',
    '--color-warning-200': '254 205 170',
    '--color-warning-300': '253 173 116',
    '--color-warning-400': '251 149 75',
    '--color-warning-500': '231 120 40',
    '--color-warning-600': '215 108 31',
    '--color-warning-700': '180 90 26',
    '--color-warning-800': '130 68 23',
    '--color-warning-900': '108 56 19',
    '--color-warning-950': '84 45 18',

    /* Info */
    '--color-info-0': '236 248 254',
    '--color-info-50': '199 235 252',
    '--color-info-100': '162 221 250',
    '--color-info-200': '124 207 248',
    '--color-info-300': '87 194 246',
    '--color-info-400': '50 180 244',
    '--color-info-500': '13 166 242',
    '--color-info-600': '11 141 205',
    '--color-info-700': '9 115 168',
    '--color-info-800': '7 90 131',
    '--color-info-900': '5 64 93',
    '--color-info-950': '3 38 56',

    /* Typography */
    '--color-typography-0': '254 254 255',
    '--color-typography-50': '245 245 245',
    '--color-typography-100': '229 229 229',
    '--color-typography-200': '219 219 220',
    '--color-typography-300': '212 212 212',
    '--color-typography-400': '163 163 163',
    '--color-typography-500': '140 140 140',
    '--color-typography-600': '115 115 115',
    '--color-typography-700': '82 82 82',
    '--color-typography-800': '64 64 64',
    '--color-typography-900': '38 38 39',
    '--color-typography-950': '23 23 23',

    /* Outline */
    '--color-outline-0': '253 254 254',
    '--color-outline-50': '243 243 243',
    '--color-outline-100': '230 230 230',
    '--color-outline-200': '221 220 219',
    '--color-outline-300': '211 211 211',
    '--color-outline-400': '165 163 163',
    '--color-outline-500': '140 141 141',
    '--color-outline-600': '115 116 116',
    '--color-outline-700': '83 82 82',
    '--color-outline-800': '65 65 65',
    '--color-outline-900': '39 38 36',
    '--color-outline-950': '26 23 23',

    /* Background */
    '--color-background-0': '255 255 255',
    '--color-background-50': '246 246 246',
    '--color-background-100': '242 241 241',
    '--color-background-200': '220 219 219',
    '--color-background-300': '213 212 212',
    '--color-background-400': '162 163 163',
    '--color-background-500': '142 142 142',
    '--color-background-600': '116 116 116',
    '--color-background-700': '83 82 82',
    '--color-background-800': '65 64 64',
    '--color-background-900': '39 38 37',
    '--color-background-950': '18 18 18',

    /* Background Special */
    '--color-background-error': '254 241 241',
    '--color-background-warning': '255 243 234',
    '--color-background-success': '237 252 242',
    '--color-background-muted': '247 248 247',
    '--color-background-info': '235 248 254',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '55 55 55',
    '--color-indicator-info': '83 153 236',
    '--color-indicator-error': '185 28 28',
  }),
  dark: vars({
    // Background and foreground
    '--color-background': '0 0 0',    // #000000 - Solid black
    '--color-foreground': '237 237 237', // #ededed
    
    // Green scale (Primary) - Dark theme
    '--color-green-1': '6 12 7',          // #060c07
    '--color-green-2': '17 26 18',        // #111a12
    '--color-green-3': '18 45 23',        // #122d17
    '--color-green-4': '16 60 26',        // #103c1a
    '--color-green-5': '21 74 34',        // #154a22
    '--color-green-6': '29 89 43',        // #1d592b
    '--color-green-7': '36 106 53',       // #246a35
    '--color-green-8': '41 126 62',       // #297e3e
    '--color-green-9': '0 213 88',        // #00d558 (Primary)
    '--color-green-10': '0 201 76',       // #00c94c
    '--color-green-11': '26 219 94',      // #1adb5e
    '--color-green-12': '173 244 183',    // #adf4b7
    
    // Gray scale - Dark theme
    '--color-gray-1': '10 10 12',        // #0a0a0c
    '--color-gray-2': '24 24 26',        // #18181a
    '--color-gray-3': '33 34 37',         // #212225
    '--color-gray-4': '41 41 45',        // #29292d
    '--color-gray-5': '48 49 54',        // #303136
    '--color-gray-6': '57 58 64',        // #393a40
    '--color-gray-7': '70 72 79',        // #46484f
    '--color-gray-8': '94 96 106',       // #5e606a
    '--color-gray-9': '108 110 121',     // #6c6e79
    '--color-gray-10': '121 123 134',    // #797b86
    '--color-gray-11': '178 179 189',    // #b2b3bd
    '--color-gray-12': '238 238 240',    // #eeeef0
    
    // Blue scale (Info/Accent) - Dark theme (using same values as light for now)
    '--color-blue-1': '250 253 255',     // #fafdff
    '--color-blue-2': '241 251 255',     // #f1fbff
    '--color-blue-3': '226 245 255',    // #e2f5ff (50)
    '--color-blue-4': '204 241 255',     // #ccf1ff (100)
    '--color-blue-5': '179 233 255',     // #b3e9ff (200)
    '--color-blue-6': '150 221 255',     // #96ddff (300)
    '--color-blue-7': '109 206 250',     // #6dcefa (400)
    '--color-blue-8': '0 185 246',       // #00b9f6 (500)
    '--color-blue-9': '0 194 255',       // #00c2ff (600) - Info/Accent
    '--color-blue-10': '0 183 243',      // #00b7f3 (700)
    '--color-blue-11': '0 128 179',      // #0080b3 (800)
    '--color-blue-12': '0 58 88',        // #003a58 (900)
    
    // Legacy neon colors (same for light and dark)
    '--color-neon-green': '0 213 88',    // #00D558 - Primary
    '--color-neon-pink': '255 46 154',   // #FF2E9A - Destructive / Cancel
    '--color-electric-blue': '0 194 255', // #00C2FF - Info / Accent
    '--color-neon-yellow': '255 230 0',  // #FFE600 - Warning / Accent
    '--color-neon-purple': '164 74 255', // #A44AFF - Tabs / UI
    '--color-black': '0 0 0',
    '--color-white': '255 255 255',

    // Legacy primary colors (keeping for compatibility)
    '--color-primary-0': '166 166 166',
    '--color-primary-50': '175 175 175',
    '--color-primary-100': '186 186 186',
    '--color-primary-200': '197 197 197',
    '--color-primary-300': '212 212 212',
    '--color-primary-400': '221 221 221',
    '--color-primary-500': '230 230 230',
    '--color-primary-600': '240 240 240',
    '--color-primary-700': '250 250 250',
    '--color-primary-800': '253 253 253',
    '--color-primary-900': '254 249 249',
    '--color-primary-950': '253 252 252',

    /* Secondary  */
    '--color-secondary-0': '20 20 20',
    '--color-secondary-50': '23 23 23',
    '--color-secondary-100': '31 31 31',
    '--color-secondary-200': '39 39 39',
    '--color-secondary-300': '44 44 44',
    '--color-secondary-400': '56 57 57',
    '--color-secondary-500': '63 64 64',
    '--color-secondary-600': '86 86 86',
    '--color-secondary-700': '110 110 110',
    '--color-secondary-800': '135 135 135',
    '--color-secondary-900': '150 150 150',
    '--color-secondary-950': '164 164 164',

    /* Tertiary */
    '--color-tertiary-0': '84 49 18',
    '--color-tertiary-50': '108 61 19',
    '--color-tertiary-100': '130 73 23',
    '--color-tertiary-200': '180 98 26',
    '--color-tertiary-300': '215 117 31',
    '--color-tertiary-400': '231 129 40',
    '--color-tertiary-500': '251 157 75',
    '--color-tertiary-600': '253 180 116',
    '--color-tertiary-700': '254 209 170',
    '--color-tertiary-800': '255 233 213',
    '--color-tertiary-900': '255 242 229',
    '--color-tertiary-950': '255 250 245',

    /* Error */
    '--color-error-0': '83 19 19',
    '--color-error-50': '127 29 29',
    '--color-error-100': '153 27 27',
    '--color-error-200': '185 28 28',
    '--color-error-300': '220 38 38',
    '--color-error-400': '230 53 53',
    '--color-error-500': '239 68 68',
    '--color-error-600': '249 97 96',
    '--color-error-700': '229 91 90',
    '--color-error-800': '254 202 202',
    '--color-error-900': '254 226 226',
    '--color-error-950': '254 233 233',

    /* Success */
    '--color-success-0': '27 50 36',
    '--color-success-50': '20 83 45',
    '--color-success-100': '22 101 52',
    '--color-success-200': '32 111 62',
    '--color-success-300': '42 121 72',
    '--color-success-400': '52 131 82',
    '--color-success-500': '72 151 102',
    '--color-success-600': '102 181 132',
    '--color-success-700': '132 211 162',
    '--color-success-800': '162 241 192',
    '--color-success-900': '202 255 232',
    '--color-success-950': '228 255 244',

    /* Warning */
    '--color-warning-0': '84 45 18',
    '--color-warning-50': '108 56 19',
    '--color-warning-100': '130 68 23',
    '--color-warning-200': '180 90 26',
    '--color-warning-300': '215 108 31',
    '--color-warning-400': '231 120 40',
    '--color-warning-500': '251 149 75',
    '--color-warning-600': '253 173 116',
    '--color-warning-700': '254 205 170',
    '--color-warning-800': '255 231 213',
    '--color-warning-900': '255 244 237',
    '--color-warning-950': '255 249 245',

    /* Info */
    '--color-info-0': '3 38 56',
    '--color-info-50': '5 64 93',
    '--color-info-100': '7 90 131',
    '--color-info-200': '9 115 168',
    '--color-info-300': '11 141 205',
    '--color-info-400': '13 166 242',
    '--color-info-500': '50 180 244',
    '--color-info-600': '87 194 246',
    '--color-info-700': '124 207 248',
    '--color-info-800': '162 221 250',
    '--color-info-900': '199 235 252',
    '--color-info-950': '236 248 254',

    /* Typography */
    '--color-typography-0': '23 23 23',
    '--color-typography-50': '38 38 39',
    '--color-typography-100': '64 64 64',
    '--color-typography-200': '82 82 82',
    '--color-typography-300': '115 115 115',
    '--color-typography-400': '140 140 140',
    '--color-typography-500': '163 163 163',
    '--color-typography-600': '212 212 212',
    '--color-typography-700': '219 219 220',
    '--color-typography-800': '229 229 229',
    '--color-typography-900': '245 245 245',
    '--color-typography-950': '254 254 255',

    /* Outline */
    '--color-outline-0': '26 23 23',
    '--color-outline-50': '39 38 36',
    '--color-outline-100': '65 65 65',
    '--color-outline-200': '83 82 82',
    '--color-outline-300': '115 116 116',
    '--color-outline-400': '140 141 141',
    '--color-outline-500': '165 163 163',
    '--color-outline-600': '211 211 211',
    '--color-outline-700': '221 220 219',
    '--color-outline-800': '230 230 230',
    '--color-outline-900': '243 243 243',
    '--color-outline-950': '253 254 254',

    /* Background */
    '--color-background-0': '18 18 18',
    '--color-background-50': '39 38 37',
    '--color-background-100': '65 64 64',
    '--color-background-200': '83 82 82',
    '--color-background-300': '116 116 116',
    '--color-background-400': '142 142 142',
    '--color-background-500': '162 163 163',
    '--color-background-600': '213 212 212',
    '--color-background-700': '229 228 228',
    '--color-background-800': '242 241 241',
    '--color-background-900': '246 246 246',
    '--color-background-950': '255 255 255',

    /* Background Special */
    '--color-background-error': '66 43 43',
    '--color-background-warning': '65 47 35',
    '--color-background-success': '28 43 33',
    '--color-background-muted': '51 51 51',
    '--color-background-info': '26 40 46',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '247 247 247',
    '--color-indicator-info': '161 199 245',
    '--color-indicator-error': '232 70 69',
  }),
};
