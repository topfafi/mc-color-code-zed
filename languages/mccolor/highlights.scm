; Minecraft Bedrock color/format codes → standard Zed highlight names.
; Using built-in names means colors show up in every theme automatically.

; §0 black
(seg_black)        @constant

; §1 dark blue
(seg_dark_blue)    @type

; §2 dark green
(seg_dark_green)   @comment

; §3 dark aqua
(seg_dark_aqua)    @string.special

; §4 dark red
(seg_dark_red)     @string

; §5 dark purple
(seg_dark_purple)  @keyword

; §6 gold
(seg_gold)         @number

; §7 gray
(seg_gray)         @comment

; §8 dark gray
(seg_dark_gray)    @punctuation.delimiter

; §9 blue
(seg_blue)         @type

; §a green
(seg_green)        @property

; §b aqua
(seg_aqua)         @tag

; §c red
(seg_red)          @keyword

; §d light purple
(seg_light_purple) @attribute

; §e yellow
(seg_yellow)       @number

; §f white
(seg_white)        @text.literal

; §g minecoin gold (Bedrock only)
(seg_minecoin)     @function

; Formatting
(seg_bold)         @emphasis.strong
(seg_italic)       @emphasis
(seg_underline)    @link_text
(seg_strike)       @comment
(seg_obfuscate)    @string.escape
(seg_reset)        @punctuation

; ${variable} — stands out from colored text
(variable)         @variable.special

; §§ — escaped section sign
(escape_section)   @string.escape

; Unknown §x — no color, plain text
(unknown_code)     @text.literal

; Plain text and newlines
(text)             @text.literal
(newline)          @text.literal
