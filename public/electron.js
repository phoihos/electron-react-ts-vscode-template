"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var path = __importStar(require("path"));
function createWindow() {
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: electron_is_dev_1.default
        }
    });
    mainWindow.loadURL(electron_is_dev_1.default ? 'http://localhost:3000' : "file://".concat(path.join(__dirname, '../build/index.html')));
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZWxlY3Ryb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE4QztBQUM5QyxvRUFBb0M7QUFDcEMseUNBQTZCO0FBRTdCLFNBQVMsWUFBWTtJQUVuQixJQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUM7UUFDbkMsS0FBSyxFQUFFLEdBQUc7UUFDVixNQUFNLEVBQUUsR0FBRztRQUNYLGNBQWMsRUFBRTtZQUVkLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFFBQVEsRUFBRSx5QkFBSztTQUNoQjtLQUNGLENBQUMsQ0FBQztJQUdILFVBQVUsQ0FBQyxPQUFPLENBQUMseUJBQUssQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLGlCQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUUsQ0FBQyxDQUFDO0FBSWhILENBQUM7QUFLRCxjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUc5QixjQUFHLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO0lBRzFCLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRO1FBQUUsY0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFHakIsSUFBSSx3QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsWUFBWSxFQUFFLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUEifQ==