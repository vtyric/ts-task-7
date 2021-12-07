/** Задача 2
 * Необходимо реализовать асинхронную подгрузку модулей в браузере:
 * 1) Разнести классы SettingValue, Setting и Example по разным *.ts файлам
 * 2) После компиляции TypeScript должно получаться 3 файла формата *.js.
 * 3) Создать index.html, в котором необходимо указать ссылку на первый JavaScript файл,
 *      все остальные файлы должны подгрузиться асинхронно по цепочке, используя requireJS.
 */

import {SettingValue} from "./SettingValue";
import {Setting} from "./Setting";
import {Example} from "./Example";

const settingValue = new SettingValue("p1", "p2");
const setting = new Setting("k", settingValue);
const example = new Example(setting);

console.log(example);
