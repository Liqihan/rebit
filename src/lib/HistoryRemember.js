/*
 * @Author: grove.liqihan
 * @Date: 2017-10-10 10:08:14
 * @Desc: 记录下操作历史
 */

import _ from 'lodash';
// var _ = require('lodash');
// var state = {
//     data: {
//         a: 1
//     }
// }
// let historyRemember = new HistoryRemember(state, () => {
// })
// historyRemember.push({
//     selector: 'data.a',
//     value: 3
// })
// console.log(state); // { data: { a: 3 } }

// historyRemember.back();
// console.log(state); // { data: { a: 1 } }
// historyRemember.forward();
// console.log(state); // { data: { a: 3 } }
class HistoryRemember {
    constructor(state, onchange) {
        this.state = state;
        this.history = [null];
        this.index = 0;
        this.onchange = onchange || function () {}
    }
    get length () {
        return this.history.length;
    }
    push(changes) {
        if (!Array.isArray(changes)) {
            changes = [changes];
        }
        changes.forEach((change) => {
            change.oldValue = _.get(this.state, change.selector) || null;
            _.set(this.state, change.selector, _.cloneDeep(change.value));
        });
        this.index += 1;
        this.history.length = this.index;
        this.history.push(_.cloneDeep(changes));
        this.onchange();
        return true;
    }
    // 返回
    back () {
        if (this.index === 0) {
            return false;
        }
        let changes = this.history[this.index];
        changes.forEach(change => {
            _.set(this.state, change.selector, _.cloneDeep(change.oldValue))
        })
        this.index -=1;
        this.onchange();
        return true;
    }
    forward () {
        if (this.index === this.history.length - 1) {
            return false;
        }
        var changes = this.history[this.index + 1];
        changes.forEach(change => {
            if (change.value == null) {
                _.unset(this.state, change.selector)
            } else {
                _.set(this.state, change.selector, _.cloneDeep(change.value))
            }
        })
        this.index += 1;
        this.onchange();
        return true;
    }
    clear () {
        this.history.length = 1
        this.index = 0

        this.onchange()

        return true
    }
}
export default HistoryRemember
