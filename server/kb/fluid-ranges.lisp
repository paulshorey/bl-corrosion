;; Copyright 2015-2017, by the Beyond Limits, Inc.
;;
;; This software may be subject to U.S. export control laws. By accepting this 
;; software, the user agrees to comply with all applicable U.S. export laws and 
;; regulations. User has the responsibility to obtain export licenses, or other 
;; export authority as may be required before exporting such information to 
;; foreign countries or providing access to foreign persons.

;; Prototypes.


;; H2O Ok if between 0-5%
(Def_Concept_Blueprint
 :Name H2O_OK
 :Components ((:Name H2O
	       :Constraint ($And 
			     ($>= ($Value H2O) 0.0)
			     ($<= ($Value H2O) 5.0)
			    )
	      )
	     )
)

;; H2O Bad if between 5-10%
(Def_Concept_Blueprint
 :Name H2O_Bad
 :Components ((:Name H2O
	       :Constraint ($And 
			     ($> ($Value H2O) 5.0)
			     ($<= ($Value H2O) 10.0)
			    )
	      )
	     )
)

;; H2O Danger if between 10-15%
(Def_Concept_Blueprint
 :Name H2O_Danger
 :Components ((:Name H2O
	       :Constraint ($And 
			     ($> ($Value H2O) 10.0)
			     ($<= ($Value H2O) 15.0)
			    )
	      )
	     )
)

;; H2O Alert if greater than 15%
(Def_Concept_Blueprint
 :Name H2O_Alert
 :Components ((:Name H2O
	       :Constraint ($> ($Value H2O) 15.0)
	      )
	     )
)

;; H2S Ok if between 0-0.5%
(Def_Concept_Blueprint
 :Name H2S_Ok
 :Components ((:Name H2S
	       :Constraint ($And 
			     ($>= ($Value H2S) 0.0)
			     ($<= ($Value H2S) 0.5)
			    )
	      )
	     )
)

;; H2S Bad if between 0.5-1%
(Def_Concept_Blueprint
 :Name H2S_Bad
 :Components ((:Name H2S
	       :Constraint ($And 
			     ($> ($Value H2S) 0.5)
			     ($<= ($Value H2S) 1.0)
			    )
	      )
	     )
)

;; H2S Danger if between 1-1.5%
(Def_Concept_Blueprint
 :Name H2S_Danger
 :Components ((:Name H2S
	       :Constraint ($And 
			     ($> ($Value H2S) 1.0)
			     ($<= ($Value H2S) 1.5)
			    )
	      )
	     )
)

;; H2S Alert if greater than 1.5%
(Def_Concept_Blueprint
 :Name H2S_Alert
 :Components ((:Name H2S
	       :Constraint ($> ($Value H2S) 1.5)
	      )
	     )
)


;; Salt Ok if between 1-100ppm
(Def_Concept_Blueprint
 :Name Salt_Ok
 :Components ((:Name Salt
	       :Constraint ($And 
			     ($>= ($Value Salt) 1.0)
			     ($<= ($Value Salt) 100.0)
			    )
	      )
	     )
)

;; Salt Bad if between 100-500ppm
(Def_Concept_Blueprint
 :Name Salt_Bad
 :Components ((:Name Salt
	       :Constraint ($And 
			     ($> ($Value Salt) 100.0)
			     ($<= ($Value Salt) 500.0)
			    )
	      )
	     )
)

;; Salt Danger if between 500-1000ppm
(Def_Concept_Blueprint
 :Name Salt_Danger
 :Components ((:Name Salt
	       :Constraint ($And 
			     ($> ($Value Salt) 500.0)
			     ($<= ($Value Salt) 1000.0)
			    )
	      )
	     )
)

;; Salt Alert if greater 1000ppm
(Def_Concept_Blueprint
 :Name Salt_Alert
 :Components ((:Name Salt
	       :Constraint ($> ($Value Salt) 1000.0)
	      )
	     )
)

;; Temperature OK if less than 290
(Def_Concept_Blueprint
 :Name Temperature_Ok
 :Components ((:Name Temperature
	       :Constraint ($<= ($Value Temperature) 290.0)
	      )
	     )
)

;; Temperature Bad if greater than 290
(Def_Concept_Blueprint
 :Name Temperature_Bad
 :Components ((:Name Temperature
	       :Constraint ($> ($Value Temperature) 290.0)
	      )
	     )
)
