export function pageFilter(raw: string) {
    let filteredLinks: string = raw
        .replace(/<a\s(?:.+?)>/gi, "")

    let filteredEdits: string = filteredLinks
        .replace(/<span class="mw-editsection-divider">(?:.+?)<\/span>(?:.+?)<\/span>/gi, " ")
        .replace(/<span class="mw-editsection-bracket">(?:.+?)<\/span>/gi, " ")
        .replace(/<span class="mw-editsection">(?:.+?)<\/span>/gi, " ")

    let asd = filteredEdits
        .replace('<tr><td colspan="2" class="" style="text-align:center;border-top:1px solid #DDD; background:#eaecf0;;border-top:1px solid #DDD; background:#eaecf0;"><b><img alt="Лагатып Вікікрыніц" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/15px-Wikisource-logo.svg.png" decoding="async" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/23px-Wikisource-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/30px-Wikisource-logo.svg.png 2x" data-file-width="410" data-file-height="430" width="15" height="16"> Творы</b> ў Вікікрыніцах</td></tr><tr><td colspan="2" class="" style="text-align:center;border-top:1px solid #DDD; background:#eaecf0;;"><span class="wikidata-claim" data-wikidata-property-id="P373" data-wikidata-claim-id="Q2791424$8CF384B9-371E-4DF6-AD64-BCE5C2D3EB31"><span class="wikidata-snak wikidata-main-snak"><img alt="Лагатып Вікісховішча" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/15px-Commons-logo.svg.png" decoding="async" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/23px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png 2x" data-file-width="1024" data-file-height="1376" width="15" height="20">&nbsp;Медыяфайлы на Вікісховішчы</span></span></td></tr>', ' ')
        
        
    // page = page.replace(/(</a>)/gi, "</p>"))

    const page = asd

    console.log(page)

    return page
}