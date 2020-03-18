"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
    mainWindow.loadURL(electron_is_dev_1.default ? 'http://localhost:3000' : "file://" + path.join(__dirname, '../build/index.html'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZWxlY3Ryb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQThDO0FBQzlDLG9FQUFvQztBQUNwQyx5Q0FBNkI7QUFFN0IsU0FBUyxZQUFZO0lBRW5CLElBQU0sVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUNuQyxLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO1FBQ1gsY0FBYyxFQUFFO1lBRWQsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLHlCQUFLO1NBQ2hCO0tBQ0YsQ0FBQyxDQUFDO0lBR0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyx5QkFBSyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsWUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBRyxDQUFDLENBQUM7QUFJaEgsQ0FBQztBQUtELGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRzlCLGNBQUcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7SUFHMUIsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVE7UUFBRSxjQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUdqQixJQUFJLHdCQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxZQUFZLEVBQUUsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQSJ9