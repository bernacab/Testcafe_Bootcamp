import page from './pageModel';

fixture('Test con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Escribir numeros', async t =>{
    await t
        .click(page.link5)
    
    await t 
        .typeText((page.input51, "letras")
        .expect(page.input51.value).eql("")

});