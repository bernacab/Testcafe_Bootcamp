import page from './pageModel';

fixture('Test con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar formulario de recuperacion', async t =>{
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok();  
})

test('Probar escribir que podemos escribir un email', async t =>{
    await t
        .click(page.link3)

    await t 
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
})

test('Probar que envio el email correctamente', async t =>{
    await t
        .click(page.link3)

    await t 
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
        .click(page.button32)
    
    await t
        .expect(page.text33.innerText).contains('sent', 'Prueba exitosa')
})

test('Prueba negativa para el enlace de forgot password', async t =>{
    await t
        .click(page.link3)

    await t 
        .click(page.forgot)
        .expect(page.text34.innerText).contains('Internal Server Error')
})