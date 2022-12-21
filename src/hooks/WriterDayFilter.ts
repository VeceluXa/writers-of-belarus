import { Filter } from "interweave";

class LinkFilter extends Filter {
    attribute(name: string, value: string): string {
        if (name === "href") {
            return encodeURIComponent(value);
        }

        return value;
    }

    node(name: string, node: HTMLElement): HTMLElement | null {
        console.log(name)
        if (name === "div" && node.classList[0] === "mw-parser-output") {
            node.setAttribute(
                "style",
                `
                font-family: sans-serif
            `
            );
        }
        return node;
    }
}

export default LinkFilter;
