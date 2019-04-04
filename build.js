// Build mdi.svg
// <svg>
//   <defs>
//     <svg id="name">
//       <path d="..."/>
//     </svg>
//     ...
//   </defs>
// </svg>

// TODO: Rewrite with @mdi/util
const fs = require('fs');
const svgPackageFolder = "./node_modules/@mdi/svg";
const encoding = "utf8";
const outputFile = "mdi.svg";

function getVersion() {
  const file = fs.readFileSync(`${svgPackageFolder}/package.json`, { encoding });
  return JSON.parse(file).version;
}

function getSvgFiles() {
  return fs.readdirSync(`${svgPackageFolder}/svg`).map(file => {
    return `${svgPackageFolder}/svg/${file}`;
  })
}

function getIconData(files) {
  // { name: "icon-name", path: "M..." }
  return files.map(file => {
    const name = file.match(/([^\/]+)\.svg$/)[1];
    const svgContent = fs.readFileSync(file, { encoding });
    const viewBox = svgContent.match(/ viewBox="([^"]+)"/)[1];
    const path = svgContent.match(/ d="([^"]+)"/)[1];
    return { name, viewBox, path };
  })
}

function writeFile(name, data) {
  fs.writeFileSync(`./${name}`, data, { encoding });
}

function build() {
  const version = getVersion();
  const files = getSvgFiles();
  const icons = getIconData(files);
  const items = icons.map(({name, viewBox, path}) => {
    return `<svg id="${name}" viewBox="${viewBox}"><path d="${path}"/></svg>`
  });
  const template = `<svg><defs>${items.join('')}</defs></svg>`;
  writeFile(outputFile, template);
  console.log(`Successfully built v${version}!`);
}

build();
