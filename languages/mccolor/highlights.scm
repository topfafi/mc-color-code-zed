; Minecraft Bedrock color/format codes → standard Zed highlight names.
; Using built-in names means colors show up in every theme automatically.

; §0 black  → dimmed constant
(seg_black)       @constant

; §1 dark blue → type (blue in most themes)
(seg_dark_blue)   @type

; §2 dark green → comment (green)
(seg_dark_green)  @comment

; §3 dark aqua → string.special (teal)
(seg_dark_aqua)   @string.special

; §4 dark red → string (red)
(seg_dark_red)    @string

; §5 dark purple → keyword (purple in many themes)
(seg_dark_purple) @keyword

; §6 gold → number (yellow/orange)
(seg_gold)        @number

; §7 gray → comment (muted)
(seg_gray)        @comment

; §8 dark gray → very muted
(seg_dark_gray)   @punctuation.delimiter

; §9 blue → type
(seg_blue)        @type

; §a green → property (green)
(seg_green)       @property

; §b aqua → tag (cyan)
(seg_aqua)        @tag

; §c red → keyword (bright red)
(seg_red)         @keyword

; §d light purple → emphasis (magenta)
(seg_light_purple) @attribute

; §e yellow → number (bright yellow)
(seg_yellow)      @number

; §f white → plain text
(seg_white)       @text.literal

; §g minecoin gold (Bedrock only) → function (warm gold)
(seg_minecoin)    @function

; Formatting — bold uses strong emphasis, others map to available names
(seg_bold)        @emphasis.strong
(seg_italic)      @emphasis
(seg_underline)   @link_text
(seg_strike)      @comment
(seg_obfuscate)   @string.escape
(seg_reset)       @punctuation

; ${variable} stands out from colored text
(variable)        @variable.special

; §§ → escaped literal §
(escape_section)  @string.escape

; Unknown §x code — just plain text, no highlight
(unknown_code)    @text

(text)    @text
(newline) @text
