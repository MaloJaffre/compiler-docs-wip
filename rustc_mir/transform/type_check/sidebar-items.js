initSidebarItems({"fn":[["type_check","Type checks the given `mir` in the context of the inference context `infcx`. Returns any region constraints that have yet to be proven."]],"struct":[["Locations",""],["MirTypeckRegionConstraints","A collection of region constraints that must be satisfied for the program to be considered well-typed."],["OutlivesSet","Outlives relationships between regions and types created at a particular point within the control-flow graph."],["TypeChecker","The MIR type checker. Visits the MIR and enforces all the constraints needed for it to be valid and well-typed. Along the way, it accrues region constraints -- these can later be used by NLL region checking."],["TypeckMir",""]]});