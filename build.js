// Build mdi.svg
// <svg>
//   <defs>
//     <svg id="name">
//       <path d="..."/>
//     </svg>
//     ...
//   </defs>
// </svg>

const { getVersion, write, getMeta } = require('@mdi/util');
const outputFile = "mdi.svg";

function build() {
  const version = getVersion();
  const items = getMeta(true).map(({name, path}) => `<svg id="${name}" viewBox="0 0 24 24"><path d="${path}"/></svg>`);
  const template = `<svg><defs>${items.join('')}</defs></svg>`;
  write(outputFile, template);
  console.log(`MDI: Successfully built v${version}!`);
}

build();
