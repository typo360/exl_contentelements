tt_content.syntaxHighlighter = COA
tt_content.syntaxHighlighter {
	10 = < lib.stdheader

	# Plugin options
	20 = COA
	20 {
		wrap = <pre class="|">

		# Language
		10 = TEXT
		10.stdWrap.dataWrap = brush: {t3datastructure : pi_flexform->language};

		# Highlighted lines
		20 = TEXT
		20.stdWrap.dataWrap = highlight: [{t3datastructure : pi_flexform->highlight}];
		20.if.isTrue.data = t3datastructure : pi_flexform->highlight

		# First line
		30 = TEXT
		30.stdWrap.dataWrap = first-line: [{t3datastructure : pi_flexform->firstline}];
		30.if.isTrue.data = t3datastructure : pi_flexform->firstline

		# Html script ?
		40 = TEXT
		40.stdWrap.dataWrap = html-script: true;
		40.if.isTrue.data = t3datastructure : pi_flexform->htmlscript

		# Toobar (useless)
		50 = TEXT
		50.value = toolbar: false;
	}

	# Code
	30 = TEXT
	30.stdWrap.dataWrap = {t3datastructure : pi_flexform->codearea}</pre>
}