initSidebarItems({"fn":[["assert_dep_graph",""],["delete_workproduct_files",""],["dep_graph_tcx_init",""],["finalize_session_directory","This function finalizes and thus 'publishes' the session directory by renaming it to `s-{timestamp}-{svh}` and releasing the file lock. If there have been compilation errors, however, this function will just delete the presumably invalid session directory."],["in_incr_comp_dir",""],["load_dep_graph",""],["load_query_result_cache",""],["prepare_session_directory","Allocates the private session directory. The boolean in the Ok() result indicates whether we should try loading a dep graph from the successfully initialized directory, or not. The post-condition of this fn is that we have a valid incremental compilation session directory, if the result is `Ok`. A valid session directory is one that contains a locked lock file. It may or may not contain a dep-graph and work products from a previous session. If the call fails, the fn may leave behind an invalid session directory. The garbage collection will take care of it."],["save_dep_graph",""],["save_trans_partition",""],["save_work_products",""]]});