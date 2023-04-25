export function initPolicyStyles() {
    let policyTitle = document.querySelector('.shopify-policy__title');
    let splitTitle = new SplitText(policyTitle, {type: "words"});
    let firstWord = splitTitle.words[0];
    gsap.set(firstWord, { fontStyle: "italic" });
}