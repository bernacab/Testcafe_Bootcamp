import { Selector} from 'testcafe';
import page from './pageModel';

fixture('practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar click en el enlace', async t => {
    await t
        .click(page.link2)

    await t
    if (page.text21.innerText == "Test"){
        console.log ("Pasa")
    } else {
        console.log("No pasa")
        
    }
    });
    