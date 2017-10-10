import _ from 'lodash';
import eventbus from '../lib/eventbus';
import HistoryRemember from '../lib/HistoryRemember';
import defaultState from './default-config';

var state = _.cloneDeep(defaultState)
let recorder = new HistoryRemember(defaultState, () => {
    eventbus.$emit('state-change');
})
window.recorder = recorder;
export default recorder;