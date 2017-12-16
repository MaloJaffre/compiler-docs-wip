initSidebarItems({"fn":[["build_output_filenames",""],["collect_crate_types",""],["compile_input",""],["compute_crate_disambiguator",""],["default_provide",""],["default_provide_extern",""],["phase_1_parse_input",""],["phase_2_configure_and_expand","Run the \"early phases\" of the compiler: initial `cfg` processing, loading compiler plugins (including those from `addl_plugins`), syntax expansion, secondary `cfg` expansion, synthesis of a test harness if one is to be provided, injection of a dependency on the standard library and prelude, and name resolution."],["phase_3_run_analysis_passes","Run the resolution, typechecking, region checking and other miscellaneous analysis passes on the crate. Return various structures carrying the results of the analysis."],["phase_4_translate_to_llvm","Run the translation phase to LLVM, after which the AST and analysis can be discarded."],["phase_5_run_llvm_passes","Run LLVM itself, producing a bitcode file, assembly file or object file as a side effect."],["source_name",""]],"struct":[["CompileController","CompileController is used to customize compilation, it allows compilation to be stopped and/or to call arbitrary code at various points in compilation. It also allows for various flags to be set to influence what information gets collected during compilation."],["CompileState","State that is passed to a callback. What state is available depends on when during compilation the callback is made. See the various constructor methods (`state_*`) in the impl to see which data is provided for any given entry point."],["ExpansionResult",""],["PhaseController",""]]});