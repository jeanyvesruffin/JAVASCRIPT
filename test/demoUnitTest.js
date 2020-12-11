const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    return totalLetters;
}


// test unitaire Mocha sidebar (plugin vscode)
// describe == decris, it == cela ('resultat attendu'), expect == attendue
describe('getWordCount()', function () {
    it('Devrait trouver 4 mots', function () {
        expect(getWordCount('J ai quatres mots!').to.equal(4));
    });
    it('Devrait ne pas trouver de mot', function () {
        expect(getWordCount(' ').to.equal(0));
    });
})