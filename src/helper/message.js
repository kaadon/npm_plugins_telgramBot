export function strong(string) {
    return `<b>${string}</b>`
}

export function italic(string) {
    return `<em>${string}</em>`
}
export function ins(string) {
    return `<ins>${string}</ins>`
}
export function tgSpoiler(string) {
    return `<tg-spoiler>${string}</tg-spoiler>`
}

export function href(url,text = null) {
    return `<a href="${string}">${text?text:url}</a>`
}
export function userHref(user,text = null) {
    return `<a href="tg://user?id=${user}">${text?text:user}</a>`
}

export function code(string) {
    return `<code>${string}</code>`
}
export function pre(string) {
    return `<pre>${string}</pre>`
}
export function preCode(string) {
    return `<pre><code>${string}</code></pre>`
}
export function tgEmoji(emojiId,text) {
    return `<tg-emoji emoji-id="${emojiId}">${text}</tg-emoji>`
}
