import page from './pageModel';
import {Selector } from 'testcafe'

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar click derecho', async t =>{
    await t 
        .click(page.link10)
    
    await t
        .setNativeDialogHandler()
        .rightClick(page.hotspot101)

});