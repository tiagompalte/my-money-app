import {Enum} from 'enumify';
 
class Actions extends Enum {}
Actions.initEnum(['BILLING_SUMMARY_FETCHED', 'TAB_SELECTED', 'TAB_SHOWED']);

export default Actions