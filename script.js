// script.js
const data = [
    { "word": "速い", "synonyms": ["迅速", "素早い", "早い"] },
    { "word": "大きい", "synonyms": ["巨大", "広大", "広い"] },
    { "word": "美しい", "synonyms": ["綺麗", "華麗", "優雅"] }
];

const options = {
    keys: ['word', 'synonyms'],
    includeScore: true
};

const fuse = new Fuse(data, options);

// 検索ボックス
document.getElementById('search-box').addEventListener('input', function() {
    const query = this.value;
    const result = fuse.search(query);
    displayResults(result);
});

// 検索結果を表示する関数
function displayResults(result) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // 既存の結果をクリア

    if (result.length === 0) {
        resultContainer.innerHTML = '一致する結果がありません。';
        return;
    }

    result.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${item.item.word}</strong> - 類語: ${item.item.synonyms.join(', ')}`;
        resultContainer.appendChild(div);
    });
}
