export var name = "d3";
export var version = "5.14.2";
export var description = "Data-Driven Documents";
export var keywords = ["dom","visualization","svg","animation","canvas"];
export var homepage = "https://d3js.org";
export var license = "BSD-3-Clause";
export var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
export var main = "dist/d3.node.js";
export var unpkg = "dist/d3.min.js";
export var jsdelivr = "dist/d3.min.js";
export var module = "index.js";
export var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
export var files = ["dist/**/*.js","index.js"];
export var scripts = {"pretest":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c","test":"tape 'test/**/*-test.js'","prepublishOnly":"yarn test","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m \"${npm_package_version}\" && git tag -am \"${npm_package_version}\" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js"};
export var devDependencies = {"json2module":"0.0","rimraf":"2","rollup":"1","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"3","rollup-plugin-terser":"5","tape":"4"};
export var dependencies = {"d3-array":"1","d3-axis":"1","d3-brush":"1","d3-chord":"1","d3-collection":"1","d3-color":"github:votiro/d3-color","d3-contour":"1","d3-dispatch":"1","d3-drag":"1","d3-dsv":"1","d3-ease":"1","d3-fetch":"1","d3-force":"1","d3-format":"1","d3-geo":"1","d3-hierarchy":"1","d3-interpolate":"1","d3-path":"1","d3-polygon":"1","d3-quadtree":"1","d3-random":"1","d3-scale":"2","d3-scale-chromatic":"1","d3-selection":"1","d3-shape":"1","d3-time":"1","d3-time-format":"2","d3-timer":"1","d3-transition":"1","d3-voronoi":"1","d3-zoom":"1"};
