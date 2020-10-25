import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Validar presencia del recuadro add element', async t =>{
    await t
        .click(page.link6)

    await t
    .expect(page.addBtn61.visible).ok()

});


test('Probar agregar y quitar botones', async t =>{

    await t
        .click(page.link6)
    
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.removeBtn65)
        .click(page.removeBtn64)
        .click(page.removeBtn63)
        .click(page.removeBtn62)
        .expect(page.removeBtn65.visible).notOk()
        .expect(page.removeBtn64.visible).notOk()
        .expect(page.removeBtn63.visible).notOk()
        .expect(page.removeBtn62.visible).notOk()
});
