import React from "react";
import Layout from "../../../components/layout";

const articleDate = 'May 29, 2026';

const picokosmos12_4b = ` ##### 
 # + # 
 #$.$##
## *  #
#  *  #
#    ##
##  ## 
 #### `;

const picokosmos12_5b = ` ##### 
 # + # 
 #$.$# 
 # * ##
## *  #
#  *  #
#    ##
##  ## 
 ####  `;

const picokosmos12_6b = ` ##### 
 # + # 
 #$.$# 
 # * # 
 # * ##
## *  #
#  *  #
#    ##
##  ## 
 ####  `;

const picokosmos12 = ` ##### 
 # + # 
 #$.$# 
 # * # 
 # * # 
 # * ##
## *  #
#  *  #
#    ##
##  ## 
 ####  `;

const picokosmos17_4b = ` ##### 
## + # 
# $.$##
#  *  #
#  *  #
###  ##
  #### `;

const picokosmos17_6b = ` ##### 
 # + # 
 #$.$# 
## * # 
#  * ##
#  *  #
#  *  #
###  ##
  #### `;

const picokosmos17 = ` ##### 
 # + # 
 #$.$# 
 # * # 
 # * # 
## * # 
#  * ##
#  *  #
#  *  #
###  ##
  #### `;

const femtocosmos3_9b = `   ####  
####  ###
#       #
# ***** #
# $ * @ #
### . ###
  # *$#  
  # . #  
  #####  `;

const femtocosmos2 = `   ####  
####  ###
#       #
# ***** #
# $ * @ #
### . ###
  # *$#  
  # . #  
  # *$#  
  # . #  
  #####  `;


const femtocosmos3 = `   ####  
####  ###
#       #
# ***** #
# $ * @ #
### . ###
  # *$#  
  # . #  
  # *$#  
  # . #  
  # *$#  
  # . #  
  #####  `;

const femtocosmos3_15b = `   ####  
####  ###
#       #
# ***** #
# $ * @ #
### . ###
  # *$#  
  # . #  
  # *$#  
  # . #  
  # *$#  
  # . #  
  # *$#  
  # . #  
  #####  `

const sokoext_level47_13b = `######      
#.   #      
# # $#######
# $.   $   #
#.* *$*.+*.#
#$. *  $ $ #
#    * #####
########    `;

const sokoext_level47_15b = `######        
#.   #        
# # $#########
# $.   $     #
#.* *$*.+*.*.#
#$. *  $ $ $ #
#    * #######
########      `;

const sokoext_level47_17b = `######          
#.   #          
# # $###########
# $.   $       #
#.* *$*.+*.*.*.#
#$. *  $ $ $ $ #
#    * #########
########        `;

const sokoext_level47 = `######            
#.   #            
# # $#############
# $.   $         #
#.* *$*.+*.*.*.*.#
#$. *  $ $ $ $ $ #
#    * ###########
########          `;

const sokoext_level47_21b = `######              
#.   #              
# # $###############
# $.   $           #
#.* *$*.+*.*.*.*.*.#
#$. *  $ $ $ $ $ $ #
#    * #############
########            `;

const picokosmos17_holland_4b = ` ##### 
##@. # 
# $.$##
#. *  #
# $   #
###  ##
  #### `;

const picokosmos17_holland_5b = ` ##### 
 # .@# 
##$.$# 
#  * ##
#. *  #
# $   #
###  ##
  #### `;

const picokosmos17_holland_6b = ` ##### 
 #@. # 
 #$.$# 
## * # 
#  * ##
#. *  #
# $   #
###  ##
  #### `;


const picokosmos17_holland_7b = ` ##### 
 # .@# 
 #$.$# 
 # * # 
## * # 
#  * ##
#. *  #
# $   #
###  ##
  #### `;

const picokosmos17_holland = ` ##### 
 #@. # 
 #$.$# 
 # * # 
 # * # 
## * # 
#  * ##
#. *  #
# $   #
###  ##
  #### `;

const picokosmos17_chao_4b = ` ##### 
 # + ##
##$.  #
#  *$ #
#   * #
##  ###
 ####  `;

const picokosmos17_chao_5b = ` ##### 
 # + # 
 # .$##
##$*  #
#  *  #
#   * #
##  ###
 ####  `;

const picokosmos17_chao_6b = ` ##### 
 # + # 
 #$. # 
 # *$##
## *  #
#  *  #
#   * #
##  ###
 ####  `;

const picokosmos17_chao_7b = ` ##### 
 # + # 
 # .$# 
 #$* # 
 # * ##
## *  #
#  *  #
#   * #
##  ###
 ####  `;

const picokosmos17_chao = ` ##### 
 # + # 
 #$. # 
 # *$# 
 # * # 
 # * ##
## *  #
#  *  #
#   * #
##  ###
 ####  `;

const scorpius_8b = `#########
##@. ####
##$.$####
## * ####
## * ####
## *$  .#
#  * .###
#   $ ###
##  #####
#########`;

const scorpius_10b = `#########
##@. ####
##$.$####
## * ####
## * ####
## * ####
## * ####
## *$  .#
#  * .###
#   $ ###
##  #####
#########`;

const scorpius = `#########
##@. ####
##$.$####
## * ####
## * ####
## * ####
## * ####
## * ####
## * ####
## *$  .#
#  * .###
#   $ ###
##  #####
#########`;

const eiffel_tower_4b = `#######
## . ##
#@ * ##
#  $  #
# * * #
###  ##
#######`;

const eiffel_tower_5b = `#######
## . ##
## * ##
#@ * ##
#  $  #
# * * #
###  ##
#######`;

const eiffel_tower_6b = `#######
## . ##
## * ##
## * ##
#@ * ##
#  $  #
# * * #
###  ##
#######`;

const eiffel_tower = `#######
## . ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
## * ##
#@ * ##
#  $  #
# * * #
###  ##
#######`;

const dries_36_9_286b_7b = ` #####  
 # + #  
 #$*$#  
 # . #  
##$* ###
#  . $.#
# .  # #
##  $  #
 ##  ###
  ####  `;

const dries_36_9_286b = ` #####  
 # + #  
 #$*$#  
 # . #  
 #$* #  
 # . #  
##$* ###
#  . $.#
# .  # #
##  $  #
 ##  ###
  ####  `;

const dries_36_9_286b_11b = ` #####  
 # + #  
 #$*$#  
 # . #  
 #$* #  
 # . #  
 #$* #  
 # . #  
##$* ###
#  . $.#
# .  # #
##  $  #
 ##  ###
  ####  `;

const picokosmos17_6b_2_moves = ` ##### 
 # . # 
 #@.$# 
##$* # 
#  * ##
#  *  #
#  *  #
###  ##
  #### `;

const picokosmos17_326_moves = ` ##### 
 # * # 
 # * # 
 # . # 
 #@.$# 
##$* # 
#  * ##
#  *  #
# $.  #
###  ##
  #### `;

const femtocosmos2_9_moves = `   ####  
####  ###
#   $ $ #
# **+*. #
# $ .$  #
### . ###
  # *$#  
  # . #  
  # *$#  
  # . #  
  #####  `;

const femtocosmos3_1323_moves = `   ####  
####  ###
#   $ $ #
# **+*. #
# $ .$  #
### . ###
  # *$#  
  # . #  
  # *$#  
  # . #  
  # * #  
  # * #  
  #####  `;

export default function Index() {
    return (
        <>
            <Layout>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 rounded bg-white">
                                <h3 className="title mb-0">
                                    Fibo puzzles
                                </h3>
                                <p className="text-right">
                                    <sub>Published: {articleDate}</sub>
                                </p>
                                <p>
                                    Fibo puzzles are a class of puzzles in which, every time the structure is extended
                                    to include one or more boxes, the number of optimal pushes grows exponentially.
                                    Asymptotically, as the number of boxes approaches infinity, this expansion occurs
                                    at the exact rate of the classic Fibonacci sequence: the golden ratio, or phi
                                    (approx. 1.618). This results in unusually long solution lengths. For example, a
                                    puzzle of this type with 16 boxes can require more than 20,000 moves and over
                                    8,000 pushes.
                                </p>
                                <p>
                                    The recurrence relation for optimal pushes across distinct versions of this puzzle
                                    type (ranging from fewer to more boxes) may resemble the Fibonacci recurrence
                                    P(n) = P(n-1) + P(n-2), but that is not always the case.
                                </p>
                                <p>
                                    Some variants require two increments of one box (resulting in two boxes added)
                                    because a single increment either makes the puzzle unsolvable or is structurally
                                    impossible, requiring a paired addition. In these specific variants, the growth rate
                                    measured over two increments is phi + 1. Since phi + 1 = phi^2, we can calculate a
                                    theoretical growth rate per single increment using sqrt(phi^2) = phi. Thus, it
                                    remains the golden ratio.
                                </p>

                                <p className="mb-1">
                                    Picokosmos 12. Created in October 2001 by Aymeric du Peloux and
                                    titled <em>Hanoï</em> in French.
                                    It resembles the Tower of Hanoi and contains 7 boxes. When he published it, he
                                    noted that people could have fun adding new floors.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = P(n-1) + P(n-2) + 6 - (-1)^n for
                                        n &gt;= 6
                                    </li>
                                    <li><strong>Base cases:</strong> P(4) given as 23, P(5) given as 43</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos12_4b}</pre>
                                            </td>
                                            <td className="text-center">23<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos12_5b}</pre>
                                            </td>
                                            <td className="text-center">43<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">6</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos12_6b}</pre>
                                            </td>
                                            <td className="text-center">71</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">7<br/>
                                                <span className="small text-muted">(Picokosmos 12)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos12}</pre>
                                            </td>
                                            <td className="text-center">121</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">197</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">325</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">527</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">859</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1391</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">2257</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">3653</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">5917</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">9575</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=16, P(16)/P(15) = 9575 / 5917 ≈ 1.61822 (converges to Golden
                                                Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Picokosmos 12 and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/picokosmos-12.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    Picokosmos 17. Created in December 2001 by Aymeric du Peloux and
                                    titled <em>Grand Hanoï</em> in French. It contains 8 boxes, but it is not a version
                                    of Picokosmos 12 expanded to 8 boxes; Picokosmos 17 is more compact.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = 3 * P(n-2) - P(n-4) + 11 for n &gt;=
                                        8
                                    </li>
                                    <li><strong>Base cases:</strong> P(4) given as 15, P(6) given as 57</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_4b}</pre>
                                            </td>
                                            <td className="text-center">15<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">6</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_6b}</pre>
                                            </td>
                                            <td className="text-center">57<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">7</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8<br/>
                                                <span className="small text-muted">(Picokosmos 17)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17}</pre>
                                            </td>
                                            <td className="text-center">167</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">455</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1209</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">3183</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">8351</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">18</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">21881</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=18, P(18)/P(16) = 21881 / 8351 ≈ 2.62017 (sqrt ≈ 1.61869,
                                                converging to Golden Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Picokosmos 17 and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/picokosmos-17.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    Femtocosmos 3. Created in February 2026 by Aymeric du Peloux, it introduces a novel
                                    structure shaped like a 'T' rather than the traditional 'I' form.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = 3 * P(n-2) - P(n-4) + 2n - 5 for
                                        n &gt;= 13
                                    </li>
                                    <li><strong>Base cases:</strong> P(9) given as 75, P(11) given as 221</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{femtocosmos3_9b}</pre>
                                            </td>
                                            <td className="text-center">75<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11<br/>
                                                <span className="small text-muted">(Femtocosmos 2)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{femtocosmos2}</pre>
                                            </td>
                                            <td className="text-center">221<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13<br/>
                                                <span className="small text-muted">(Femtocosmos 3)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{femtocosmos3}</pre>
                                            </td>
                                            <td className="text-center">609</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{femtocosmos3_15b}</pre>
                                            </td>
                                            <td className="text-center">1631</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">4313</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">18</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">19</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">11341</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">20</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">21</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">29747</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">22</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">23</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">77941</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=23, P(23)/P(21) = 77941 / 29747 ≈ 2.62013 (sqrt ≈ 1.61868,
                                                converging to Golden Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Femtocosmos 3 and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/femtocosmos-3.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    SokoExt Level 47, created in May 2026 by Antony from Australia, introduces a novel
                                    structure shaped like two intersecting rectangles: one vertical and one horizontal.
                                    He wrote: "I wanted to design a recursive level, so I designed #47".
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = 3 * P(n-2) - P(n-4) – (147 - 2n) for
                                        n &gt;= 17
                                    </li>
                                    <li><strong>Base cases:</strong> P(13) given as 331, P(15) given as 673</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{sokoext_level47_13b}</pre>
                                            </td>
                                            <td className="text-center">331<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{sokoext_level47_15b}</pre>
                                            </td>
                                            <td className="text-center">673<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{sokoext_level47_17b}</pre>
                                            </td>
                                            <td className="text-center">1575</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">18</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">19<br/>
                                                <span className="small text-muted">(SokoExt - Level 47)</span></td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{sokoext_level47}</pre>
                                            </td>
                                            <td className="text-center">3943</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">20</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">21</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{sokoext_level47_21b}</pre>
                                            </td>
                                            <td className="text-center">10149</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=33, P(33)/P(31) = 3235501 / 1235903 ≈ 2.61792 (sqrt ≈ 1.618,
                                                converging to Golden Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for SokoExt - Level 47 and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/sokoext-level-47.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <h5 className="mt-3">Puzzles with the same or similar Picokosmos 17 template</h5>

                                <p className="mb-1">
                                    Picokosmos 17 (David Holland variant). It appeared in a 2002 <a
                                    className="text-primary"
                                    href="http://www.abelmartin.com/rj/sokobanJS/sokoban-jd.blogspot/sokoban_lessons/picokosmos17/analysis.htm"
                                    target="_blank"
                                    rel="noopener noreferrer">analysis</a>.
                                    <br/>
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = P(n-1) + P(n-2) + 7 for n &gt;= 6
                                    </li>
                                    <li><strong>Base cases:</strong> P(4) given as 19, P(5) given as 35</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_holland_4b}</pre>
                                            </td>
                                            <td className="text-center">19<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_holland_5b}</pre>
                                            </td>
                                            <td className="text-center">35<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">6</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_holland_6b}</pre>
                                            </td>
                                            <td className="text-center">61</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">7</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_holland_7b}</pre>
                                            </td>
                                            <td className="text-center">103</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8<br/>
                                                <span
                                                    className="small text-muted">(Picokosmos 17 David Holland variant)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_holland}</pre>
                                            </td>
                                            <td className="text-center">171</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">281</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">459</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">747</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1213</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1967</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">3187</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">5161</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">8355</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">13523</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=17, P(17)/P(16) = 13523 / 8355 ≈ 1.61855 (converges to Golden
                                                Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Picokosmos 17 David Holland variant and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/picokosmos-17-david-holland-variant.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    Picokosmos 17 (Yang Chao variant). It appeared in a 2012 <a
                                    className="text-primary"
                                    href="http://sokoban.ws/blog/?p=430"
                                    target="_blank"
                                    rel="noopener noreferrer">analysis</a> in Chinese.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = P(n-1) + P(n-2) + 8 for n &gt;= 6
                                    </li>
                                    <li><strong>Base cases:</strong> P(4) given as 18, P(5) given as 34</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_chao_4b}</pre>
                                            </td>
                                            <td className="text-center">18<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_chao_5b}</pre>
                                            </td>
                                            <td className="text-center">34<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">6</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_chao_6b}</pre>
                                            </td>
                                            <td className="text-center">60</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">7</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_chao_7b}</pre>
                                            </td>
                                            <td className="text-center">102</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8<br/>
                                                <span
                                                    className="small text-muted">(Picokosmos 17 Yang Chao variant)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{picokosmos17_chao}</pre>
                                            </td>
                                            <td className="text-center">170</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">280</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">458</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">746</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1212</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1966</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">3186</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">5160</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">8354</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">13522</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=17, P(17)/P(16) = 13522 / 8354 ≈ 1.61863 (converges to Golden
                                                Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Picokosmos 17 Yang Chao variant and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/picokosmos-17-yang-chao-variant.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    Scorpius: In the style of Picokosmos 17. It contains 12 boxes.
                                    Created by David Dahlem in 2014, it appears in a collection called DD-1.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = 3 * P(n-2) - P(n-4) + 4 for n &gt;=
                                        12
                                    </li>
                                    <li><strong>Base cases:</strong> P(8) given as 106, P(10) given as 284</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">8</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{scorpius_8b}</pre>
                                            </td>
                                            <td className="text-center">106<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{scorpius_10b}</pre>
                                            </td>
                                            <td className="text-center">284<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12<br/>
                                                <span className="small text-muted">(Scorpius)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{scorpius}</pre>
                                            </td>
                                            <td className="text-center">750</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1970</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">5164</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center text-muted font-italic">
                                                <span className="small text-muted">unsolvable</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">18</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">13526</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=18, P(18)/P(16) = 13526 / 5164 ≈ 2.61929 (sqrt ≈ 1.61842,
                                                converging to Golden Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Scorpius and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/scorpius.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p className="mb-1">
                                    Eiffel Tower: Created by 20603 (Zou Yongzhong). It contains 16 boxes. This version
                                    is from a 2016 Chinese forum <a
                                    className="text-primary"
                                    href="http://bbs.mf8-china.com/forum.php?mod=viewthread&tid=105516&page=1#pid1908829"
                                    target="_blank"
                                    rel="noopener noreferrer">message</a>.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = P(n-1) + P(n-2) + n – 1 + 2 *
                                        (-1)^(n-1) for n &gt;= 6
                                    </li>
                                    <li><strong>Base cases:</strong> P(4) given as 8, P(5) given as 21</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">4</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{eiffel_tower_4b}</pre>
                                            </td>
                                            <td className="text-center">8<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">5</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{eiffel_tower_5b}</pre>
                                            </td>
                                            <td className="text-center">21<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">6</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{eiffel_tower_6b}</pre>
                                            </td>
                                            <td className="text-center">32</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">7</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">61</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">98</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">169</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">274</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">455</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">738</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1207</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1956</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">3179</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16<br/>
                                                <span className="small text-muted">(Eiffel Tower)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{eiffel_tower}</pre>
                                            </td>
                                            <td className="text-center">5148</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">8345</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">18</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">13508</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=18, P(18)/P(17) = 13508 / 8345 ≈ 1.61819 (converges to Golden
                                                Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for Eiffel Tower and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/eiffel-tower.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <p>
                                    Around 2009, Dries De Clercq created a set called <a
                                    className="text-primary"
                                    href="https://web.archive.org/web/20090925023056/http://puzzles.net23.net/sok.htm"
                                    target="_blank"
                                    rel="noopener noreferrer"><em>Fibo</em></a>, featuring 37 variants of Picokosmos 17.
                                    I analyzed one of them:
                                </p>

                                <p className="mb-1">
                                    Puzzle 36-9-286b. It contains 9 boxes.
                                </p>
                                <ul>
                                    <li><strong>Recurrence formula:</strong> P(n) = 3 * P(n-2) - P(n-4) + n - 15 for
                                        n &gt;= 11
                                    </li>
                                    <li><strong>Base cases:</strong> P(7) given as 114, P(9) given as 286</li>
                                </ul>
                                <div className="table-responsive col-lg-5 col-md-10 col-sm-12">
                                    <table className="table table-sm table-bordered">
                                        <thead className="thead-light text-center">
                                        <tr>
                                            <th className="col-1">Boxes: n</th>
                                            <th className="col-2">Maze</th>
                                            <th className="col-3">Optimal Pushes: P(n)</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-center">7</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{dries_36_9_286b_7b}</pre>
                                            </td>
                                            <td className="text-center">114<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">8</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">9<br/>
                                                <span className="small text-muted">(36-9-286b)</span>
                                            </td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{dries_36_9_286b}</pre>
                                            </td>
                                            <td className="text-center">286<br/>
                                                <span className="small text-muted">Base case</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">10</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">11</td>
                                            <td className="text-center">
                                                <pre className="sokoban-map">{dries_36_9_286b_11b}</pre>
                                            </td>
                                            <td className="text-center">740</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">13</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">1932</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">14</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">15</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">5056</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">16</td>
                                            <td className="text-center text-muted font-italic">not applicable</td>
                                            <td className="text-center text-muted font-italic">—</td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">17</td>
                                            <td className="text-center"><span
                                                className="small text-muted">Omitted</span></td>
                                            <td className="text-center">13238</td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Note: At n=17, P(17)/P(15) = 13238 / 5056 ≈ 2.61828 (sqrt ≈ 1.61811,
                                                converging to Golden Ratio).
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-muted small px-2 py-1">
                                                Solutions for 36-9-286b and its different
                                                box-count versions are available <a
                                                className="text-primary"
                                                href="../../theoretical-analysis/36-9-286b.txt"
                                                target="_blank"
                                                rel="noopener noreferrer">here</a>.
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <h5>Conclusion</h5>

                                <p>
                                    Fibo puzzles can be difficult for both humans and automated solvers because of their
                                    large solution lengths. Automated solvers fail to find solutions when the number of
                                    boxes is relatively small, for example, above 18.
                                </p>
                                <p>
                                    In some solutions, I observed that the previous solution is fully contained at the
                                    end; when optimized, it sometimes shows slight variations. Also, the ending player
                                    position is relatively the same across all versions of a puzzle. This presents an
                                    opportunity to develop a method that identifies the pattern from the solution of a
                                    version of the puzzle with fewer boxes, and repeats it enough times to create a
                                    working solution.
                                </p>
                                <p>
                                    The complexity of Fibo puzzles increases every time boxes are added, due to the
                                    growing number of pushes required, but if a pattern of repetition were found, the
                                    difficulty would theoretically remain the same for all versions. In practice, when
                                    treating them as general puzzles, every expansion makes the puzzle significantly
                                    harder and much longer to solve.
                                </p>

                                <h5>Update 12 June 2026</h5>

                                <p>
                                    I created a <a
                                    className="text-primary"
                                    href="../../theoretical-analysis/picokosmos17.py"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >script</a> that generates solutions for Picokosmos 17. This is super interesting
                                    because every new solution contains the previous one at the end. This shows that it
                                    might be possible to do the same for all solutions in this class of puzzles, if a
                                    proper pattern is found and followed.
                                </p>

                                <h5>Update 19 June 2026</h5>

                                <p>
                                    In the case of the Picokosmos 17 series of variants, I noticed that the previous
                                    puzzle version's solution is fully included at the end of the solution if you ignore
                                    the case of the letters. In LURD notation, uppercase letters indicate a push. For
                                    example, if we replace the last 170 moves of the Picokosmos 17 solution with the
                                    corresponding 170 moves of the 6-box variant, the only differences are two specific
                                    case shifts: the 'DD' in the 6-box variant becomes 'dD' in Picokosmos 17, and an 'r'
                                    becomes an 'R'. This is because what is a push in the 6-box variant becomes a move
                                    in the same direction in Picokosmos 17, and vice versa.
                                </p>

                                <p>
                                    At a certain point in Picokosmos 17, the box setup is almost identical to an early
                                    state of the previous puzzle, but the subsequent flow of moves, without considering
                                    whether a move is a push or a walk, matches perfectly. This explains why the
                                    previous puzzle version's solution, regarding steps, is fully incorporated at the
                                    end of the solution.
                                </p>

                                <p>
                                    Picokosmos 17 (6-box variant) state after 2 moves:<br/>
                                    <pre className="sokoban-map">{picokosmos17_6b_2_moves}</pre>
                                </p>

                                <p>
                                    Picokosmos 17 state after 326 moves:<br/>
                                    <pre className="sokoban-map">{picokosmos17_326_moves}</pre>
                                </p>

                                <p>
                                    In the case of the Femtocosmos 3 series of variants, I noticed that the previous
                                    puzzle version's solution is consistently included at the end of the solution,
                                    excluding only the first 9 moves: 'UdldlluRU', which are replaced by 'DluuurDuu'.
                                    This sets up a state virtually identical to the previous puzzle's initial progress.
                                    Example:
                                </p>

                                <p>
                                    Femtocosmos 2 state after 9 moves:<br/>
                                    <pre className="sokoban-map">{femtocosmos2_9_moves}</pre>
                                </p>

                                <p>
                                    Femtocosmos 3 state after 1323 moves:<br/>
                                    <pre className="sokoban-map">{femtocosmos3_1323_moves}</pre>
                                </p>

                                <p>Thus, this opportunity for pattern-based solution generation also applies to
                                    Femtocosmos 3.</p>

                                <h5>Update 11 August 2026</h5>

                                <p>
                                    Sam Cornwell identified a recursive pattern in SokoExt Level 47 where each larger
                                    solution consists of the previous pattern, a new middle section, and the previous
                                    pattern again (e.g., 17-box = 15-box + new section + 15-box).
                                </p>

                                <p>
                                    The main Fibo templates are found in Picokosmos 17, Femtocosmos 3, and SokoExt
                                    Level 47.
                                </p>

                                <h5>Thankful note</h5>

                                <p>
                                    Thanks to Andrej Cerjak for pointing out Antony's SokoExt Level 47, and to Matthias
                                    Meger and Sam Cornwell for providing the solutions for the 17-box and 21-box
                                    variants, respectively.
                                </p>

                                <p>
                                    —Analysis and article by Carlos Montiers Aguilera.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
