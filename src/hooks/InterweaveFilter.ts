import { Filter } from 'interweave';

class LinkFilter extends Filter {
    attribute(name: string, value: string): string {
        if (name === 'href') {
            return encodeURIComponent(value)
        }

        return value
    }

    node(name: string, node: HTMLElement): HTMLElement | null {

        if (name === 'div' && node.classList[0] == 'mw-parser-output') {
            console.log('123')
            node.setAttribute('style', `
                font-family: sans-serif
            `)
        }

        if (name === 'a') {
            node.removeAttribute('href')
            node.removeAttribute('title')
            // console.log(`${node.childNodes[0].textContent}`)
            // node.replaceWith(`${node.childNodes[0].textContent}`)
        }

        if (name === 'span' && node.classList[0] == 'mw-editsection') {
            return null
        }

        if (name === 'table' && node.classList[0] == 'metadata') {
            return null
        }

        if (name === 'div' && ['navbox', 'reflist', 'hatnote'].indexOf(node.classList[0]) > -1) {
            return null
        }

        if (name === 'th' && node.classList[0] == 'plainlist') {
            node.setAttribute('style', 'text-align: left;')
        }

        if (name === 'th' && node.classList[0] == 'infobox-above') {
            node.setAttribute('style', `
                font-size: 400%
            `)
        }

        if (name === 'div' && node.classList[0] == 'thumbinner') {
            node.setAttribute('style', `
                text-align: center;
                margin: 10px
            `)
        }

        return node;
    }
}

export default LinkFilter