import page from './pageModel';

fixture('Test con Testcafe')
    .page('https://the-internet.herokuapp.com/')

test('Probar checkboxes', async t =>{
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(0))
    
    await t.expect(page.baseCheckbox.nth(0).checked).notOk()
    await t.expect(page.baseCheckbox.nth(1).checked).notOk()   
})

test('Quitar checkboxes', async t =>{
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(0))
    
    await t.expect(page.baseCheckbox.nth(0).checked).Ok()
    await t.expect(page.baseCheckbox.nth(1).checked).Ok()   
})