import login from './login.action';
import register from './register.action';
import stockList from './stockList.action';
import stockCreate from './stockCreate.action';
import stockEdit from './stockEdit.action';

export default {
    ...login,
    ...register,
    ...stockList,
    ...stockCreate,
    ...stockEdit
}