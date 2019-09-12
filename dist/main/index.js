/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-log/index.js":
/*!********************************************!*\
  !*** ./node_modules/electron-log/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar catchErrors               = __webpack_require__(/*! ./lib/catchErrors */ \"./node_modules/electron-log/lib/catchErrors.js\");\nvar log                       = __webpack_require__(/*! ./lib/log */ \"./node_modules/electron-log/lib/log.js\");\nvar transportConsole          = __webpack_require__(/*! ./lib/transports/console */ \"./node_modules/electron-log/lib/transports/console.js\");\nvar transportFile             = __webpack_require__(/*! ./lib/transports/file */ \"./node_modules/electron-log/lib/transports/file/index.js\");\nvar transportRemote           = __webpack_require__(/*! ./lib/transports/remote */ \"./node_modules/electron-log/lib/transports/remote.js\");\nvar transportMainConsole      = __webpack_require__(/*! ./lib/transports/mainConsole */ \"./node_modules/electron-log/lib/transports/mainConsole.js\");\nvar transportRendererConsole  = __webpack_require__(/*! ./lib/transports/rendererConsole */ \"./node_modules/electron-log/lib/transports/rendererConsole.js\");\nvar utils                     = __webpack_require__(/*! ./lib/utils */ \"./node_modules/electron-log/lib/utils.js\");\n\nmodule.exports = {\n  catchErrors: function callCatchErrors(options) {\n    var opts = Object.assign({}, {\n      log: module.exports.error,\n      showDialog: process.type === 'browser'\n    }, options || {});\n\n    catchErrors(opts);\n  },\n  hooks: [],\n  isDev: utils.isDev(),\n  levels: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],\n  variables: {\n    processType: process.type\n  }\n};\n\nmodule.exports.transports = {\n  console: transportConsole(module.exports),\n  file: transportFile(module.exports),\n  remote: transportRemote(module.exports),\n  mainConsole: transportMainConsole(module.exports),\n  rendererConsole: transportRendererConsole(module.exports)\n};\n\nmodule.exports.levels.forEach(function (level) {\n  module.exports[level] = log.bind(null, module.exports, level);\n});\n\nmodule.exports.log = log.bind(null, module.exports, 'info');\n\nmodule.exports.default = module.exports;\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/index.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/catchErrors.js":
/*!******************************************************!*\
  !*** ./node_modules/electron-log/lib/catchErrors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Some ideas from sindresorhus/electron-unhandled\n */\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/electron-log/lib/utils.js\");\n\nvar isAttached = false;\n\nmodule.exports = function catchErrors(options) {\n  if (isAttached) return { stop: stop };\n  isAttached = true;\n\n  if (process.type === 'renderer') {\n    window.addEventListener('error', onRendererError);\n    window.addEventListener('unhandledrejection', onRendererRejection);\n  } else {\n    process.on('uncaughtException', onError);\n    process.on('unhandledRejection', onRejection);\n  }\n\n  return { stop: stop };\n\n  function onError(e) {\n    try {\n      if (typeof options.onError === 'function') {\n        if (options.onError(e) === false) {\n          return;\n        }\n      }\n\n      options.log(e);\n\n      if (options.showDialog && e.name.indexOf('UnhandledRejection') < 0) {\n        var type = process.type || 'main';\n        utils.showErrorBox(\n          'A JavaScript error occurred in the ' + type + ' process',\n          e.stack\n        );\n      }\n    } catch (logError) {\n      console.error(e);\n    }\n  }\n\n  function onRejection(reason) {\n    if (reason instanceof Error) {\n      var reasonName = 'UnhandledRejection ' + reason.name;\n\n      var errPrototype = Object.getPrototypeOf(reason);\n      var nameProperty = Object.getOwnPropertyDescriptor(errPrototype, 'name');\n      if (!nameProperty || !nameProperty.writable) {\n        reason = new Error(reason.message);\n      }\n\n      reason.name = reasonName;\n      onError(reason);\n      return;\n    }\n\n    var error = new Error(JSON.stringify(reason));\n    error.name = 'UnhandledRejection';\n    onError(error);\n  }\n\n  function onRendererError(event) {\n    event.preventDefault();\n    onError(event.error);\n  }\n\n  function onRendererRejection(event) {\n    event.preventDefault();\n    onRejection(event.reason);\n  }\n\n  function stop() {\n    isAttached = false;\n\n    if (process.type === 'renderer') {\n      window.removeEventListener('error', onRendererError);\n      window.removeEventListener('unhandledrejection', onRendererRejection);\n    } else {\n      process.removeListener('uncaughtException', onError);\n      process.removeListener('unhandledRejection', onRejection);\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/catchErrors.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/format.js":
/*!*************************************************!*\
  !*** ./node_modules/electron-log/lib/format.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar util = __webpack_require__(/*! util */ \"util\");\n\nmodule.exports = {\n  format: format,\n  formatTimeZone: formatTimeZone,\n  pad: pad,\n  stringifyObject: stringifyObject\n};\n\n/**\n * Transform Message object to a string\n * @param {object} msg\n * @param {string|function} formatter\n * @param {object} [electronLog]\n * @param {boolean} [removeStyles=false]\n * @return {string}\n */\nfunction format(msg, formatter, electronLog, removeStyles) {\n  removeStyles = removeStyles !== undefined ? removeStyles : false;\n\n  if (typeof formatter === 'function') {\n    return formatter(msg, electronLog);\n  }\n\n  var date = new Date(msg.date || Date.now());\n  var variables = msg.variables;\n  var result = formatter;\n\n  for (var i in variables) {\n    if (!variables.hasOwnProperty(i)) continue;\n    result = result.replace('{' + i + '}', variables[i]);\n  }\n\n  result = result\n    .replace('{level}', msg.level)\n    .replace('{text}', stringifyArray(msg.data))\n    .replace('{y}', String(date.getFullYear()))\n    .replace('{m}', pad(date.getMonth() + 1))\n    .replace('{d}', pad(date.getDate()))\n    .replace('{h}', pad(date.getHours()))\n    .replace('{i}', pad(date.getMinutes()))\n    .replace('{s}', pad(date.getSeconds()))\n    .replace('{ms}', pad(date.getMilliseconds(), 3))\n    .replace('{z}', formatTimeZone(date.getTimezoneOffset()));\n\n  if (removeStyles) {\n    result = result.replace(/%c/g, '');\n  }\n\n  return result;\n}\n\nfunction stringifyArray(data) {\n  data = data.map(stringifyObject);\n\n  if (util.formatWithOptions) {\n    return util.formatWithOptions.apply(util, [{ getters: true }].concat(data));\n  }\n\n  return util.format.apply(util, data);\n}\n\nfunction stringifyObject(data) {\n  if (typeof data === 'function') {\n    return data.toString();\n  }\n\n  if (data instanceof Error) {\n    return data.stack;\n  }\n\n  return data;\n}\n\nfunction pad(number, zeros) {\n  zeros = zeros || 2;\n  return (new Array(zeros + 1).join('0') + number).substr(-zeros, zeros);\n}\n\nfunction formatTimeZone(minutesOffset) {\n  var m = Math.abs(minutesOffset);\n  return (minutesOffset >= 0 ? '-' : '+')\n    + pad(Math.floor(m / 60)) + ':'\n    + pad(m % 60);\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/format.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/log.js":
/*!**********************************************!*\
  !*** ./node_modules/electron-log/lib/log.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlog.compareLevels = compareLevels;\nmodule.exports = log;\n\nfunction log(electronLog, level) {\n  var transports = filterTransportsByLevel(electronLog, level);\n\n  for (var i in transports) {\n    if (!transports.hasOwnProperty(i) || typeof transports[i] !== 'function') {\n      continue;\n    }\n\n    var data = splitMessagesAndStyles(Array.prototype.slice.call(arguments, 2));\n\n    var msg = runHooks(electronLog.hooks, transports[i], {\n      data: data.messages,\n      date: new Date(),\n      level: level,\n      variables: electronLog.variables,\n      styles: data.styles\n    });\n\n    if (msg) {\n      transports[i](msg);\n    }\n  }\n}\n\nfunction filterTransportsByLevel(electronLog, level) {\n  var transports = electronLog.transports;\n  var levels = electronLog.levels;\n\n  var filtered = {};\n\n  for (var i in transports) {\n    if (!transports.hasOwnProperty(i)) continue;\n    if (!transports[i]) continue;\n    if (transports[i].level === false) continue;\n    if (!compareLevels(levels, transports[i].level, level)) continue;\n\n    filtered[i] = transports[i];\n  }\n\n  return filtered;\n}\n\nfunction compareLevels(levels, passLevel, checkLevel) {\n  var pass = levels.indexOf(passLevel);\n  var check = levels.indexOf(checkLevel);\n  if (check === -1 || pass === -1) {\n    return true;\n  }\n\n  return check <= pass;\n}\n\nfunction runHooks(hooks, transport, msg) {\n  if (!hooks || !hooks.length) {\n    return msg;\n  }\n\n  // eslint-disable-next-line no-plusplus\n  for (var i = 0; i < hooks.length; i++) {\n    msg = hooks[i](msg, transport);\n    if (!msg) break;\n  }\n\n  return msg;\n}\n\nfunction splitMessagesAndStyles(messages) {\n  var styles = [];\n\n  messages = messages.filter(function (el) {\n    if (el && el.substr && el.substr(0, 6) === 'color:') {\n      styles.push(el);\n      return false;\n    }\n\n    return true;\n  });\n\n  return { messages: messages, styles: styles };\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/log.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/console.js":
/*!*************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/console.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-disable no-multi-spaces */\n\nvar format = __webpack_require__(/*! ../format */ \"./node_modules/electron-log/lib/format.js\");\n\nvar original = {\n  context: console,\n  error:   console.error,\n  warn:    console.warn,\n  info:    console.info,\n  verbose: console.verbose,\n  debug:   console.debug,\n  silly:   console.silly,\n  log:     console.log\n};\n\nmodule.exports = consoleTransportFactory;\n\nfunction consoleTransportFactory(electronLog) {\n  transport.level  = 'silly';\n  transport.forceStyles = Boolean(process.env.FORCE_STYLES);\n\n  if (process.type === 'renderer') {\n    transport.format = '{h}:{i}:{s}.{ms} › {text}';\n  } else {\n    var separator = process.platform === 'win32' ? '>' : '›';\n    transport.format = '%c{h}:{i}:{s}.{ms}%c ' + separator + ' {text}';\n  }\n\n  return transport;\n\n  function transport(msg) {\n    var text = format.format(msg, transport.format, electronLog);\n\n    if (process.type === 'renderer') {\n      consoleLog(msg.level, [text].concat(msg.styles));\n      return;\n    }\n\n    var styles = msg.styles || [];\n\n    if (transport.format.substr && transport.format.substr(0, 2) === '%c') {\n      styles = ['color:' + levelToStyle(msg.level), 'color:unset']\n        .concat(styles);\n    }\n\n    if (transport.forceStyles || canUseStyles(msg.level)) {\n      consoleLog(msg.level, [applyAnsiStyles(text, styles)]);\n    } else {\n      consoleLog(msg.level, [text.replace(/%c/g, '')]);\n    }\n  }\n}\n\nfunction applyAnsiStyles(text, styles) {\n  styles.forEach(function (style) {\n    text = text.replace('%c', cssToAnsi(style));\n  });\n\n  return text + '\\x1b[0m';\n}\n\nfunction canUseStyles(level) {\n  var useStderr = level === 'error' || level === 'warn';\n  var stream = useStderr ? process.stderr : process.stdout;\n  return stream && stream.isTTY;\n}\n\nfunction consoleLog(level, args) {\n  if (original[level]) {\n    original[level].apply(original.context, args);\n  } else {\n    original.log.apply(original.context, args);\n  }\n}\n\nfunction cssToAnsi(style) {\n  var color = style.replace(/color:\\s*(\\w+).*/, '$1').toLowerCase();\n\n  switch (color) {\n    case 'unset':   return '\\x1b[0m';\n    case 'black':   return '\\x1b[30m';\n    case 'red':     return '\\x1b[31m';\n    case 'green':   return '\\x1b[32m';\n    case 'yellow':  return '\\x1b[33m';\n    case 'blue':    return '\\x1b[34m';\n    case 'magenta': return '\\x1b[35m';\n    case 'cyan':    return '\\x1b[36m';\n    case 'white':   return '\\x1b[37m';\n    default:        return '';\n  }\n}\n\nfunction levelToStyle(level) {\n  switch (level) {\n    case 'error':    return 'red';\n    case 'warn':     return 'yellow';\n    case 'info':     return 'cyan';\n    default:         return 'unset';\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/console.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/file/findLogPath.js":
/*!**********************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/file/findLogPath.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fs         = __webpack_require__(/*! fs */ \"fs\");\nvar path       = __webpack_require__(/*! path */ \"path\");\nvar os         = __webpack_require__(/*! os */ \"os\");\nvar utils      = __webpack_require__(/*! ../../utils */ \"./node_modules/electron-log/lib/utils.js\");\nvar getAppName = __webpack_require__(/*! ./getAppName */ \"./node_modules/electron-log/lib/transports/file/getAppName.js\");\n\nmodule.exports = findLogPath;\n\n/**\n * Try to determine a platform-specific path where can write logs\n * @param {string} [appName] Used to determine the last part of a log path\n * @param {string} [fileName='log.log']\n * @return {string|boolean}\n */\nfunction findLogPath(appName, fileName) {\n  fileName = fileName || 'log.log';\n  var userData = appName ? null : utils.getUserData();\n  appName = appName || getAppName();\n\n  var homeDir = os.homedir ? os.homedir() : process.env.HOME;\n\n  var dir;\n  switch (process.platform) {\n    case 'darwin': {\n      dir = prepareDir(homeDir, 'Library', 'Logs', appName)\n        .or(userData)\n        .or(homeDir, 'Library', 'Application Support', appName)\n        .result;\n      break;\n    }\n\n    case 'win32': {\n      dir = prepareDir(userData)\n        .or(process.env.APPDATA, appName)\n        .or(homeDir, 'AppData', 'Roaming', appName)\n        .result;\n      break;\n    }\n\n    default: {\n      dir = prepareDir(userData)\n        .or(process.env.XDG_CONFIG_HOME, appName)\n        .or(homeDir, '.config', appName)\n        .or(process.env.XDG_DATA_HOME, appName)\n        .or(homeDir, '.local', 'share', appName)\n        .result;\n      break;\n    }\n  }\n\n  if (dir) {\n    return path.join(dir, fileName);\n  }\n\n  return false;\n}\n\nfunction prepareDir(dirPath) {\n  if (!this || this.or !== prepareDir || !this.result) {\n    if (!dirPath) {\n      return { or: prepareDir };\n    }\n\n    dirPath = path.join.apply(path, arguments);\n    mkDir(dirPath);\n\n    try {\n      fs.accessSync(dirPath, fs.W_OK);\n    } catch (e) {\n      return { or: prepareDir };\n    }\n  }\n\n  return {\n    or: prepareDir,\n    result: (this ? this.result : false) || dirPath\n  };\n}\n\nfunction mkDir(dirPath, root) {\n  var dirs = dirPath.split(path.sep);\n  var dir = dirs.shift();\n  root = (root || '') + dir + path.sep;\n\n  try {\n    fs.mkdirSync(root);\n  } catch (e) {\n    if (!fs.statSync(root).isDirectory()) {\n      throw new Error(e);\n    }\n  }\n\n  return !dirs.length || mkDir(dirs.join(path.sep), root);\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/file/findLogPath.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/file/getAppName.js":
/*!*********************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/file/getAppName.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/** @name process.resourcesPath */\n\nvar fs   = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar utils = __webpack_require__(/*! ../../utils */ \"./node_modules/electron-log/lib/utils.js\");\n\nmodule.exports = getAppName;\n\nfunction getAppName() {\n  var name = utils.getElectronAppName();\n  if (name) {\n    return name;\n  }\n\n  try {\n    name = loadPackageName();\n    if (name) {\n      return name;\n    }\n\n    return warn('electron-log: unable to load the app name from package.json');\n  } catch (e) {\n    return warn('electron-log: ' + e.message);\n  }\n}\n\n/**\n * Try to load main app package\n * @throws {Error}\n * @return {Object|null}\n */\nfunction loadPackageName() {\n  var packageFile;\n\n  try {\n    if (__webpack_require__.c[__webpack_require__.s].filename) {\n      packageFile = find(path.dirname(__webpack_require__.c[__webpack_require__.s].filename));\n    }\n  } catch (e) {\n    packageFile = null;\n  }\n\n  if (!packageFile && process.resourcesPath) {\n    packageFile = find(path.join(process.resourcesPath, 'app.asar'));\n    var electronModule = path.join('node_modules', 'electron', 'package.json');\n    if (packageFile && packageFile.indexOf(electronModule) !== -1) {\n      packageFile = null;\n    }\n  }\n\n  if (!packageFile) {\n    packageFile = find(process.cwd());\n  }\n\n  if (!packageFile) {\n    return null;\n  }\n\n  var content = fs.readFileSync(packageFile, 'utf-8');\n  var packageData = JSON.parse(content);\n\n  //noinspection JSUnresolvedVariable\n  return packageData ? packageData.productName || packageData.name : false;\n}\n\nfunction find(root) {\n  var file;\n\n  while (!file) {\n    var parent;\n    file = path.join(root, 'package.json');\n\n    try {\n      fs.statSync(file);\n    } catch (e) {\n      parent = path.resolve(root, '..');\n      file = null;\n    }\n\n    if (root === parent) {\n      break;\n    }\n\n    root = parent;\n  }\n\n  return file;\n}\n\nfunction warn(message) {\n  console.warn(message);\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/file/getAppName.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/file/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/file/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fs          = __webpack_require__(/*! fs */ \"fs\");\nvar EOL         = __webpack_require__(/*! os */ \"os\").EOL;\nvar path        = __webpack_require__(/*! path */ \"path\");\nvar format      = __webpack_require__(/*! ../../format */ \"./node_modules/electron-log/lib/format.js\");\nvar findLogPath = __webpack_require__(/*! ./findLogPath */ \"./node_modules/electron-log/lib/transports/file/findLogPath.js\");\n\nmodule.exports = fileTransportFactory;\n\nfunction fileTransportFactory(electronLog) {\n  transport.appName      = null;\n  transport.archiveLog   = archiveLog;\n  transport.bytesWritten = 0;\n  transport.file         = null;\n  transport.fileName     = 'log.log';\n  transport.fileSize     = null;\n  transport.format       = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}';\n  transport.level        = 'silly';\n  transport.maxSize      = 1024 * 1024;\n  transport.sync         = true;\n  transport.writeOptions = {\n    flag: 'a',\n    mode: 438, // 0666\n    encoding: 'utf8'\n  };\n\n  transport.clear       = clear;\n  transport.findLogPath = findCurrentLogPath.bind(null, transport);\n  transport.init        = init;\n\n  return transport;\n\n  function transport(msg) {\n    if (!transport.file || transport.fileSize === null) {\n      init(transport);\n    }\n\n    var needLogRotation = transport.maxSize > 0\n      && transport.fileSize + transport.bytesWritten > transport.maxSize;\n\n    if (needLogRotation) {\n      transport.archiveLog(transport.file);\n      init(transport);\n    }\n\n    var text = format.format(msg, transport.format, electronLog, true);\n    write(text + EOL, transport);\n  }\n\n  function init(transp) {\n    transp = transp || transport;\n\n    transp.file = findCurrentLogPath(transp);\n\n    if (!transp.file) {\n      transp.level = false;\n      logConsole('Could not set a log file');\n      return;\n    }\n\n    try {\n      transp.fileSize = fs.statSync(transp.file).size;\n    } catch (e) {\n      transp.fileSize = 0;\n    }\n\n    transp.bytesWritten = 0;\n  }\n\n  function write(text, transp) {\n    if (transp.sync) {\n      try {\n        fs.writeFileSync(transp.file, text, transp.writeOptions);\n        incCounter(text, transp);\n      } catch (e) {\n        logConsole('Couldn\\'t write to ' + transp.file, e);\n      }\n    } else {\n      fs.writeFile(transp.file, text, transp.writeOptions, function (e) {\n        if (e) {\n          logConsole('Couldn\\'t write to ' + transp.file, e);\n        } else {\n          incCounter(text, transp);\n        }\n      });\n    }\n  }\n\n  function incCounter(text, transp) {\n    transp.bytesWritten += Buffer.byteLength(\n      text,\n      transp.writeOptions.encoding\n    );\n  }\n\n  function archiveLog(file) {\n    var info = path.parse(file);\n    try {\n      fs.renameSync(file, path.join(info.dir, info.name + '.old' + info.ext));\n    } catch (e) {\n      logConsole('Could not rotate log', e);\n    }\n  }\n\n  function clear() {\n    try {\n      fs.unlinkSync(transport.file);\n    } catch (e) {\n      logConsole('Could not clear log', e);\n    }\n  }\n\n  function findCurrentLogPath(transp) {\n    return transp.file\n      || findLogPath(transp.appName, transp.fileName);\n  }\n\n  function logConsole(message, error) {\n    var data = ['electron-log.transports.file: ' + message];\n\n    if (error) {\n      data.push(error);\n    }\n\n    electronLog.transports.console({\n      data: data,\n      date: new Date(),\n      level: 'warn'\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/file/index.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/mainConsole.js":
/*!*****************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/mainConsole.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar format = __webpack_require__(/*! ../format */ \"./node_modules/electron-log/lib/format.js\");\nvar utils  = __webpack_require__(/*! ../utils */ \"./node_modules/electron-log/lib/utils.js\");\n\nvar IPC_EVENT = '__ELECTRON_LOG_MAIN_CONSOLE__';\n\nmodule.exports = mainConsoleTransportFactory;\n\nfunction mainConsoleTransportFactory(electronLog) {\n  transport.level  = electronLog.isDev ? 'silly' : false;\n  transport.format = '[{h}:{i}:{s}.{ms}] {text}';\n\n  switch (process.type) {\n    case 'browser': {\n      utils.onIpcMain(IPC_EVENT, function (event, msg) {\n        electronLog.transports.console(msg);\n      });\n\n      return null;\n    }\n\n    case 'renderer': {\n      try {\n        utils.getRemote().require('electron-log');\n      } catch (e) {\n        // Can't auto require, electron-log should be required explicitly\n      }\n\n      return transport;\n    }\n\n    default: {\n      return null;\n    }\n  }\n\n  function transport(msg) {\n    msg.data = msg.data.map(format.stringifyObject);\n    utils.sendIpcToMain(IPC_EVENT, msg);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/mainConsole.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/remote.js":
/*!************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/remote.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar http  = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar url   = __webpack_require__(/*! url */ \"url\");\n\nmodule.exports = remoteTransportFactory;\n\nfunction remoteTransportFactory() {\n  transport.client         = { name: 'electron-application' };\n  transport.depth          = 6;\n  transport.level          = false;\n  transport.requestOptions = {};\n  transport.url            = null;\n\n  return transport;\n}\n\nfunction transport(msg) {\n  if (!transport.url) return;\n\n  var data = jsonDepth({\n    client: transport.client,\n    data: msg.data,\n    date: msg.date.getTime(),\n    level: msg.level,\n    styles: msg.styles,\n    variables: msg.variables\n  }, transport.depth + 1);\n\n  post(transport.url, data);\n}\n\nfunction post(serverUrl, data) {\n  var urlObject = url.parse(serverUrl);\n  var htTransport = urlObject.protocol === 'https:' ? https : http;\n\n  var body = JSON.stringify(data);\n\n  var options = {\n    hostname: urlObject.hostname,\n    port:     urlObject.port,\n    path:     urlObject.path,\n    method:   'POST',\n    headers:  {\n      'Content-Length': body.length,\n      'Content-Type':   'application/json'\n    }\n  };\n\n  Object.assign(options, transport.requestOptions);\n\n  var request = htTransport.request(options);\n  request.write(body);\n  request.end();\n}\n\nfunction jsonDepth(json, depth) {\n  if (depth < 1) {\n    if (Array.isArray(json)) return '[array]';\n    if (typeof json === 'object') return '[object]';\n\n    return json;\n  }\n\n  if (Array.isArray(json)) {\n    return json.map(function (child) {\n      return jsonDepth(child, depth - 1);\n    });\n  }\n\n  if (json && typeof json.getMonth === 'function') {\n    return json;\n  }\n\n  if (json === null) {\n    return null;\n  }\n\n  if (typeof json === 'object') {\n    if (typeof json.toJSON === 'function') {\n      json = json.toJSON();\n    }\n\n    var newJson = {};\n    for (var i in json) {\n      if (!Object.prototype.hasOwnProperty.call(json, i)) continue;\n      newJson[i] = jsonDepth(json[i], depth - 1);\n    }\n\n    return newJson;\n  }\n\n  return json;\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/remote.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/transports/rendererConsole.js":
/*!*********************************************************************!*\
  !*** ./node_modules/electron-log/lib/transports/rendererConsole.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar format = __webpack_require__(/*! ../format */ \"./node_modules/electron-log/lib/format.js\");\nvar utils  = __webpack_require__(/*! ../utils */ \"./node_modules/electron-log/lib/utils.js\");\n\nvar IPC_EVENT = '__ELECTRON_LOG_RENDERER_CONSOLE__';\n\nmodule.exports = renderConsoleTransportFactory;\n\nfunction renderConsoleTransportFactory(electronLog) {\n  transport.level  = electronLog.isDev ? 'silly' : false;\n  transport.format = '[{h}:{i}:{s}.{ms}] {text}';\n\n  switch (process.type) {\n    case 'browser': {\n      // require electron-log in renderer\n      utils.getElectronApp().on('web-contents-created', function (e, contents) {\n        contents.executeJavaScript('try {require(\"electron-log\")} catch(e){}');\n      });\n\n      return transport;\n    }\n\n    case 'renderer': {\n      utils.onIpcRenderer(IPC_EVENT, function (event, msg) {\n        electronLog.transports.console(msg);\n      });\n\n      return null;\n    }\n\n    default: {\n      return null;\n    }\n  }\n\n  function transport(msg) {\n    msg.data = msg.data.map(format.stringifyObject);\n    utils.sendIpcToRenderer(IPC_EVENT, msg);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/transports/rendererConsole.js?");

/***/ }),

/***/ "./node_modules/electron-log/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules/electron-log/lib/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar electron;\ntry {\n  electron = __webpack_require__(/*! electron */ \"electron\");\n} catch (e) {\n  electron = null;\n}\n\nmodule.exports = {\n  getElectronApp: getElectronApp,\n  getElectronAppName: getElectronAppName,\n  getRemote: getRemote,\n  getUserData: getUserData,\n  isDev: isDev,\n  onIpcMain: onIpcMain,\n  onIpcRenderer: onIpcRenderer,\n  sendIpcToMain: sendIpcToMain,\n  sendIpcToRenderer: sendIpcToRenderer,\n  showErrorBox: showErrorBox\n};\n\nfunction getElectronApp() {\n  return getElectronModule('app');\n}\n\nfunction getElectronAppName() {\n  var app = getElectronApp();\n  if (!app) return null;\n\n  return app.getName();\n}\n\nfunction getElectronModule(name) {\n  if (!electron) {\n    return null;\n  }\n\n  if (electron[name]) {\n    return electron[name];\n  }\n\n  if (electron.remote) {\n    return electron.remote[name];\n  }\n\n  return null;\n}\n\nfunction getRemote() {\n  if (electron && electron.remote) {\n    return electron.remote;\n  }\n\n  return null;\n}\n\nfunction getUserData() {\n  var app = getElectronApp();\n  if (!app) return null;\n\n  return app.getPath('userData');\n}\n\nfunction isDev() {\n  // based on sindresorhus/electron-is-dev\n  var app = getElectronApp();\n  if (!app) return false;\n\n  return !app.isPackaged || process.env.ELECTRON_IS_DEV === '1';\n}\n\nfunction onIpcMain(channel, listener) {\n  if (!electron || !electron.ipcMain) {\n    return;\n  }\n\n  electron.ipcMain.on(channel, listener);\n}\n\nfunction onIpcRenderer(channel, listener) {\n  if (!electron || !electron.ipcRenderer) {\n    return;\n  }\n\n  electron.ipcRenderer.on(channel, listener);\n}\n\nfunction sendIpcToMain(channel, message) {\n  if (!electron || !electron.ipcRenderer) {\n    return;\n  }\n\n  electron.ipcRenderer.send(channel, message);\n}\n\nfunction sendIpcToRenderer(channel, message) {\n  if (!electron || !electron.BrowserWindow) {\n    return;\n  }\n\n  electron.BrowserWindow.getAllWindows().forEach(function (wnd) {\n    wnd.webContents.send(channel, message);\n  });\n}\n\nfunction showErrorBox(title, message) {\n  var dialog = getElectronModule('dialog');\n  if (!dialog) return;\n\n  dialog.showErrorBox(title, message);\n}\n\n\n//# sourceURL=webpack:///./node_modules/electron-log/lib/utils.js?");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n    app,\n    BrowserWindow,\n    Menu,\n} = __webpack_require__(/*! electron */ \"electron\")\n\nconst log = __webpack_require__(/*! electron-log */ \"./node_modules/electron-log/index.js\");\n\nlet win\n\nif (false) {}\n\nfunction createWindow() {\n    log.warn(\"hogehoge\");\n    win = new BrowserWindow({\n        width: 1080,\n        height: 720,\n        webPreferences: { nodeIntegration: true }\n    })\n    win.loadFile('../index.html')\n    // if (process.env == \"development\") {\n    //     win.webContents.openDevTools()\n    // }\n    win.webContents.openDevTools()\n    win.on('closed', () => {\n        win = null\n    })\n    const template = [\n        {\n          label: 'General',\n          submenu: [\n            { label: 'Reload', accelerator: 'CmdOrCtrl+R', role: 'reload' },  // not working...\n            { label: 'Quit', accelerator: 'CmdOrCtrl+Q', role: 'quit' },\n          ],\n        },\n        {\n          label: 'Edit',\n          submenu: [\n            { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },\n            { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' },\n            { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },\n            { label: 'Select All', accelerator: 'CmdOrCtrl+A', role: 'selectall' },\n          ],\n        },\n      ];\n      Menu.setApplicationMenu(Menu.buildFromTemplate(template));\n}\n\napp.on('ready', createWindow)\n\napp.on('window-all-closed', () => {\n    if (process.platform !== 'darwin') {\n        app.quit()\n    }\n});\n\napp.on('activate', () => {\n    if (win === null) {\n        createWindow()\n    }\n});\n\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });