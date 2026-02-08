"use strict";

const chalk = require("chalk");

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

// ============================
// ENHANCED BANNER DESIGN
// ============================

// Fungsi untuk membuat gradient text
const gradientText = (text, colors) => {
  const chars = text.split('');
  return chars.map((char, i) => {
    const colorIndex = Math.floor((i / chars.length) * (colors.length - 1));
    return chalk.hex(colors[colorIndex])(char);
  }).join('');
};

// Animasi garis dengan efek
const createAnimatedLine = (length = 60, color1 = '#ff6ec7', color2 = '#7873f5') => {
  let line = '';
  for (let i = 0; i < length; i++) {
    const ratio = i / length;
    const r = Math.floor(parseInt(color1.slice(1, 3), 16) * (1 - ratio) + parseInt(color2.slice(1, 3), 16) * ratio);
    const g = Math.floor(parseInt(color1.slice(3, 5), 16) * (1 - ratio) + parseInt(color2.slice(3, 5), 16) * ratio);
    const b = Math.floor(parseInt(color1.slice(5, 7), 16) * (1 - ratio) + parseInt(color2.slice(5, 7), 16) * ratio);
    line += chalk.rgb(r, g, b)('━');
  }
  return line;
};

// Banner utama dengan desain modern
console.log(chalk.hex('#89CFF0')(`
╔══════════════════════════════════════════════════════════╗
`));

console.log(
  chalk.hex('#7873f5').bold('██████╗  █████╗ ██╗██╗     ███████╗██╗   ██╗███████╗')
);

console.log(
  chalk.hex('#8a7cf5').bold('██╔══██╗██╔══██╗██║██║     ██╔════╝╚██╗ ██╔╝██╔════╝')
);

console.log(
  chalk.hex('#9b85f6').bold('██████╔╝███████║██║██║     █████╗   ╚████╔╝ ███████╗')
);

console.log(
  chalk.hex('#ac8ef6').bold('██╔══██╗██╔══██║██║██║     ██╔══╝    ╚██╔╝  ╚════██║')
);

console.log(
  chalk.hex('#bd97f7').bold('██████╔╝██║  ██║██║███████╗███████╗   ██║   ███████║')
);

console.log(
  chalk.hex('#cea0f7').bold('╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝   ╚═╝   ╚══════╝')
);

console.log(chalk.hex('#89CFF0')(`
╚══════════════════════════════════════════════════════════╝
`));

// Header dengan gradien
console.log(
  chalk.hex('#ff6ec7').bold('  ✧･ﾟ: *✧･ﾟ:*  ') +
  gradientText(' W H A T S A P P   B O T   F R A M E W O R K ', ['#ff6ec7', '#7873f5', '#89CFF0']) +
  chalk.hex('#89CFF0').bold('  *:･ﾟ✧*:･ﾟ✧  ')
);

// Garis dekoratif
console.log(chalk.hex('#7873f5')(createAnimatedLine(70)));

// Konten utama dengan box styling
console.log(chalk.hex('#a78bfa').bold(`
╭──────────────────────────────────────────────────────────╮
`));

console.log(
  chalk.hex('#c084fc').bold('  ✦ ') + 
  chalk.hex('#d7a1ff').italic('Developer     : ') + 
  chalk.hex('#89CFF0').bold('@AanzCuyxzzz')
);

console.log(
  chalk.hex('#c084fc').bold('  ✦ ') + 
  chalk.hex('#d7a1ff').italic('Telegram      : ') + 
  chalk.hex('#89CFF0').bold('@AanzCuyxzzz')
);

console.log(
  chalk.hex('#c084fc').bold('  ✦ ') + 
  chalk.hex('#d7a1ff').italic('Last Updated  : ') + 
  chalk.hex('#FFD166').bold('2 Februari 2026')
);

console.log(
  chalk.hex('#c084fc').bold('  ✦ ') + 
  chalk.hex('#d7a1ff').italic('Version       : ') + 
  chalk.hex('#06D6A0').bold('Baileys v4.0')
);

console.log(chalk.hex('#a78bfa').bold(`
╰──────────────────────────────────────────────────────────╯
`));

// Pesan khusus dengan styling menarik
console.log(chalk.hex('#ff6ec7').bold(`
   ╭─────────────────────────────────────╮
   │                                     │
   │  `) + 
   chalk.hex('#d7a1ff').bold.bgHex('#2a2139')('   T H A N K S   F O R   U S I N G   ') +
   chalk.hex('#ff6ec7').bold(`
   │  `) + 
   chalk.hex('#a78bfa').bold.bgHex('#2a2139')('        M Y   B A I L E Y S ♡       ') +
   chalk.hex('#ff6ec7').bold(`
   │                                     │
   ╰─────────────────────────────────────╯
`));

// Footer dengan icon dekoratif
console.log(chalk.hex('#7873f5')(`
  ✦⋅⋆────────────────────────────────────────⋆⋅✦
`));

console.log(
  chalk.hex('#89CFF0').bold('  🚀 ') +
  chalk.hex('#c084fc').italic('Starting Baileys Framework...') +
  chalk.hex('#FFD166').bold(' ✓')
);

console.log(chalk.hex('#7873f5')(`
  ✦⋅⋆────────────────────────────────────────⋆⋅✦
`));

// ============================
// FIXED __createBinding
// ============================

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
