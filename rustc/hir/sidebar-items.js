initSidebarItems({"constant":[["CRATE_HIR_ID","The `HirId` corresponding to CRATE_NODE_ID and CRATE_DEF_INDEX"],["DUMMY_HIR_ID",""],["DUMMY_ITEM_LOCAL_ID",""]],"enum":[["AssociatedItemKind",""],["BinOp_",""],["BindingAnnotation","Explicit binding annotations given in the HIR for a binding. Note that this is not the final binding mode that we infer after type inference."],["BlockCheckMode",""],["BodyOwnerKind",""],["CaptureClause",""],["Constness",""],["Decl_",""],["Defaultness",""],["Expr_",""],["ForeignItem_","An item within an `extern` block"],["FunctionRetTy",""],["ImplItemKind","Represents different contents within `impl`s"],["ImplPolarity",""],["IsAuto","Is the trait definition an auto trait?"],["Item_",""],["LifetimeName",""],["LocalSource","Hints at the original code for a let statement"],["LoopIdError",""],["LoopIdResult",""],["LoopSource","The loop type that yielded an ExprLoop"],["MatchSource","Hints at the original code for a `match _ { .. }`"],["Mutability",""],["PatKind",""],["PrimTy","Not represented directly in the AST, referred to by name through a ty_path."],["QPath","Optionally `Self`-qualified value/type path or associated extension."],["RangeEnd",""],["ScopeTarget",""],["Stmt_",""],["SyntheticTyParamKind","Synthetic Type Parameters are converted to an other form during lowering, this allows to track the original form they had. Usefull for error messages."],["TraitBoundModifier","A modifier on a bound, currently this is only used for `?Sized`, where the modifier is `Maybe`. Negative bounds should also be handled here."],["TraitItemKind","Represents a trait method or associated constant or type"],["TraitMethod","A trait method's body (or just argument names)."],["TyParamBound","The AST represents all type param bounds as types. typeck::collect::compute_bounds matches these against the \"special\" built-in traits (see middle::lang_items) and detects Copy, Send and Sync."],["Ty_","The different kinds of types recognized by the compiler"],["UnOp",""],["UnsafeGeneric",""],["UnsafeSource",""],["Unsafety",""],["UseKind",""],["VariantData","Fields and Ids of enum variants and structs"],["Visibility",""],["WherePredicate","A single predicate in a `where` clause"]],"mod":[["check_attr","This module implements some validity checks for attributes. In particular it verifies that `#[inline]` and `#[repr]` attributes are attached to items that actually support them and if there are conflicts between multiple such attributes attached to the same item."],["def",""],["def_id",""],["intravisit","HIR walker for walking the contents of nodes."],["itemlikevisit",""],["lowering","Lowers the AST to the HIR."],["map",""],["pat_util",""],["print",""],["svh","Calculation and management of a Strict Version Hash for crates"]],"struct":[["Arg","represents an argument in a function header"],["Arm","represents one arm of a 'match'"],["BareFnTy",""],["Block",""],["Body","The body of a function, closure, or constant value. In the case of a function, the body contains not only the function body itself (which is an expression), but also the argument patterns, since those are something that the caller doesn't really care about."],["BodyId",""],["Crate","The top-level data structure that stores the entire contents of the crate currently being compiled."],["Destination",""],["EnumDef",""],["ExistTy",""],["Expr","An expression"],["Field",""],["FieldPat","A single field in a struct pattern"],["FnDecl","Represents the header (not the body) of a function declaration"],["ForeignItem",""],["ForeignMod",""],["Freevar","A free variable referred to in a function."],["Generics","Represents lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["GlobalAsm",""],["HirId","A HirId uniquely identifies a node in the HIR of the current crate. It is composed of the `owner`, which is the DefIndex of the directly enclosing hir::Item, hir::TraitItem, or hir::ImplItem (i.e. the closest \"item-like\"), and the `local_id` which is unique within the given owner."],["ImplItem","Represents anything within an `impl` block"],["ImplItemId",""],["ImplItemRef","A reference from an impl to one of its associated items. This contains the item's id, naturally, but also the item's name and some other high-level details (like whether it is an associated type or method, and whether it is public). This allows other passes to find the impl they want without loading the id (which means fewer edges in the incremental compilation graph)."],["InlineAsm",""],["InlineAsmOutput",""],["Item","An item"],["ItemId",""],["ItemLocalId","An `ItemLocalId` uniquely identifies something within a given \"item-like\", that is within a hir::Item, hir::TraitItem, or hir::ImplItem. There is no guarantee that the numerical value of a given `ItemLocalId` corresponds to the node's position within the owning item in any way, but there is a guarantee that the `LocalItemId`s within an owner occupy a dense range of integers starting at zero, so a mapping that maps all or most nodes within an \"item-like\" to something else can be implement by a `Vec` instead of a tree or hash map."],["Lifetime",""],["LifetimeDef","A lifetime definition, eg `'a: 'b+'c+'d`"],["Local","Local represents a `let` statement, e.g., `let <pat>:<ty> = <expr>;`"],["MacroDef","A macro definition, in this crate or imported from another."],["MethodSig","Represents a method's signature in a trait declaration or implementation."],["Mod",""],["MutTy",""],["Pat",""],["Path","A \"Path\" is essentially Rust's notion of a name; for instance: std::cmp::PartialEq  .  It's represented as a sequence of identifiers, along with a bunch of supporting information."],["PathParameters",""],["PathSegment","A segment of a path: an identifier, an optional lifetime, and a set of types."],["PolyTraitRef",""],["StructField",""],["TraitCandidate",""],["TraitItem","Represents an item declaration within a trait declaration, possibly including a default implementation. A trait item is either required (meaning it doesn't have an implementation, just a signature) or provided (meaning it has a default implementation)."],["TraitItemId",""],["TraitItemRef","A reference from an trait to one of its associated items. This contains the item's id, naturally, but also the item's name and some other high-level details (like whether it is an associated type or method, and whether it is public). This allows other passes to find the impl they want without loading the id (which means fewer edges in the incremental compilation graph)."],["TraitRef","TraitRef's appear in impls."],["Ty",""],["TyParam",""],["TypeBinding",""],["Variant_",""],["WhereBoundPredicate","A type bound, eg `for<'c> Foo: Send+Clone+'c`"],["WhereClause","A `where` clause in a definition"],["WhereEqPredicate","An equality predicate (unsupported), e.g. `T=int`"],["WhereRegionPredicate","A lifetime predicate, e.g. `'a: 'b+'c`"]],"type":[["BinOp",""],["CaptureModeMap",""],["CrateConfig",""],["Decl",""],["FreevarMap",""],["GlobMap",""],["HirVec","HIR doesn't commit to a concrete storage type and has its own alias for a vector. It can be `Vec`, `P<[T]>` or potentially `Box<[T]>`, or some other container with similar behavior. Unlike AST, HIR is mostly a static structure, so we can use an owned slice instead of `Vec` to avoid keeping extra capacity."],["Stmt","A statement"],["TraitMap",""],["TyParamBounds",""],["Variant",""]]});