import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

    test('Probar slider horizontal al maximo', async t => {
        await t
        .click(page.link11)
    
        await t
            .click(page.slider)
            .typeText(page.slider, "5")
            .expect(page.slider.value).eql('5')

});

test('Probar slider horizontal en valor medio', async t => {
    await t
    .click(page.link11)

    await t
        .click(page.slider)
        .typeText(page.slider, "2.5")
        .expect(page.slider.value).eql('2.5')

});
    test('Probar slider horizontal al minimo', async t => {
        await t
        .click(page.link11)
    
        await t
            .click(page.slider)
            .typeText(page.slider, "0.5")
            .expect(page.slider.value).eql('0.5')

});