<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

t3lib_extMgm::addStaticFile($_EXTKEY, 'syntaxHighlighter/Configuration/Typoscript/', 'EXL Contentelements - SyntaxHighlighter');


tx_weccontentelements_lib::addContentElement($_EXTKEY, 'syntaxHighlighter');
?>
