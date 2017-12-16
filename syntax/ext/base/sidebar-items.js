initSidebarItems({"enum":[["Annotatable",""],["Determinacy",""],["MacroKind","Represents different kinds of macro invocations that can be resolved."],["SyntaxExtension","An enum representing the different kinds of syntax extensions."]],"fn":[["check_zero_tts","Non-fatally assert that `tts` is empty. Note that this function returns even when `tts` is non-empty, macros that need to stop compilation should call `cx.parse_sess.span_diagnostic.abort_if_errors()` (this should be done as rarely as possible)."],["expr_to_spanned_string","Extract a string literal from the macro expanded version of `expr`, emitting `err_msg` if `expr` is not a string literal. This does not stop compilation on error, merely emits a non-fatal error and returns None."],["expr_to_string",""],["get_exprs_from_tts","Extract comma-separated expressions from `tts`. If there is a parsing error, emit a non-fatal error and return None."],["get_single_str_from_tts","Extract the string literal from the first token of `tts`. If this is not a string literal, emit an error and return None."]],"struct":[["DummyResolver",""],["DummyResult","Fill-in macro expansion result, to allow compilation to continue after hitting errors."],["ExpansionData",""],["ExtCtxt","One of these is made during expansion and incrementally updated as we go; when a macro expansion occurs, the resulting nodes have the `backtrace() -> expn_info` of their expansion context stored into their span."],["MacEager","`MacResult` implementation for the common case where you've already built each form of AST that you might return."],["ModuleData",""]],"trait":[["AttrProcMacro",""],["IdentMacroExpander",""],["MacResult","The result of a macro expansion. The return values of the various methods are spliced into the AST at the callsite of the macro."],["MultiItemDecorator",""],["MultiItemModifier",""],["ProcMacro",""],["Resolver",""],["TTMacroExpander","Represents a thing that maps token trees to Macro Results"]],"type":[["BuiltinDeriveFn",""],["IdentMacroExpanderFn",""],["MacroExpanderFn",""],["NamedSyntaxExtension",""]]});