import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Escribir numeros', async t =>{
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "268945102")
        .expect(page.input51.value).eql("268945102")

});        

test('Escribir numeros negativos', async t =>{
    await t 
        .click(page.link5)

    await t
        .typeText(page.input51, '-159874563')
        .expect(page.input51.value).eql("-159874563")
});

test('Escribir 0', async t =>{
    await t 
    .click(page.link5)

    await t
        .typeText(page.input51,"0000000000000000000")
        .expect(page.input51.value).eql("0000000000000000000")
});