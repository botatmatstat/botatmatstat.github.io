questions = [{
    "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \) \( \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). 
    Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \) \( \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
            `,
            "B": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \) \( \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "C": String.raw`
                \(\,\ln(Y_i/W_i^2) = \gamma_0 + \) \(\gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "D": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \) \( \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "E": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \) \(\gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,},
        "true": "A",
        "explanation": String.raw`
        Подставляем \( \beta_3 = 1 - 2 \beta_1 \\ \) <br>
        \( \ln Y_i = \beta_0 + \beta_1 \cdot \ln X_i + \beta_2 \cdot \ln Z_i + (1 - 2 \beta_1) \cdot \ln W_i + u_i \) <br>
        \( \ln Y_i - \ln W_i = \beta_0 + \beta_1 \cdot \ln X_i + \beta_2 \cdot \ln Z_i -2 \beta_1 \cdot \ln W_i + u_i \) <br>
        \( \ln (Y_i / W_i) = \beta_0 + \beta_1 \cdot \ln (X_i / W_i^2) + \beta_2 \cdot \ln Z_i + u_i \) <br>
        Новые коэффициенты должны получиться как старые типа. 
        `,
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что 
    \( X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \) \( X'Y = 
    \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \) \( \sum_{i=1}^n Y_i^2 = 140. \) Коэффициент \(\,R^2\,\) в этой модели равен`,
    "answers": {
    
            "A": String.raw`
                \(\,0.5\,\)
            `,
            "B": String.raw`
                \(\,0.6\,\)
            `,
            "C": String.raw`
                \(\,13/14\,\)
            `,
            "D": String.raw`
                недостаточно информации
            `,
            "E": String.raw`
                \(\,9/35\,\)
            `,},
        "true": "B",
        "explanation": String.raw`
        $$X^T X = \begin{pmatrix}
        n \ldots\\ 
        \vdots 
        \end{pmatrix} $$
        $$ X^T y= \begin{pmatrix}
        \sum y_i \\
        \vdots
        \end{pmatrix}$$
       $$ \text{RSS} = (Y - X \hat \beta)^T \cdot (Y - X \hat \beta) = $$
        $$ = Y^T Y - Y^T X (X^T X)^{-1} X^T y = 24 $$ 
        $$ \text{TSS} = y^T y - n \cdot \bar{y}^2 = y^T y - n \cdot \dfrac{(\sum y_i)^2}{n^2} = 60$$
        $$ R^2 = 1 - \dfrac{RSS}{TSS} = 0.6 $$
        `,
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i + \hat\beta_3 W_i\,\), оценённой по 24 наблюдениям, \(\,R^2=0.9\,\).  При проверке гипотезы о неадекватности модели \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,45\,\)
            `,
            "B": String.raw`
                \(\,189/2\,\)
            `,
            "C": String.raw`
                \(\,200.27\,\)
            `,
            "D": String.raw`
                \(\,60\,\)
            `,
            "E": String.raw`
                \(\,5/9\,\)
            `,},
        "true": "D",
        "explanation": String.raw`
         \( F_{\text{stat}} = \dfrac{R^2 / k}{(1 - R^2)/(n - k - 1)} = \)  <br>
         \( = \dfrac{0.9 / 3}{0.1 / 20} = 60  \) <br>
        где \( n \) - количество наблюдений, <br>  \( k - 1 \) - количество переменных + свободный член

        `,
    
    }
    ,
    {
    "question": String.raw`(1 балл) Какое условие НЕ требуется в теореме Гаусса-Маркова?`,
    "answers": {
    
            "A": String.raw`
                модель \(\,Y=X\beta + \varepsilon\,\) правильно специфицирована
            `,
            "B": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) имеют одинаковые дисперсии
            `,
            "C": String.raw`
                матрица регрессоров \(\,X\,\) имеет полный ранг
            `,
            "D": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) не коррелированы
            `,
            "E": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) нормально распределены
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Чудо-швабры производятся на разных заводах по одной из двух технологий, \(\,A\,\) или \(\,B\,\). Исследователь оценил две модели зависимости выпуска, \(\,Y\,\), от количества сырья, \(\,X\,\), и технологии:  \(\,\hat Y_i = \hat \alpha_0 + \hat\alpha_1 A_i + \hat\alpha_2 X_i + \hat\alpha_3 A_i X_i\,\);  \(\,\hat Y_i = \hat \beta_0 + \hat\beta_1 B_i + \hat\beta_2 X_i + \hat\beta_3 B_i X_i\,\).  Переменная \(\,A_i\,\) равна единице для заводов с технологией \(\,A\,\) и нулю иначе, а переменная \(\,B_i\,\) равна единице для заводов с технологией \(\,B\,\) и нулю иначе.  Оценки коэффициентов связаны соотношением`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat\alpha_1 = \hat\beta_0\,\)
            `,
            "B": String.raw`
                \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\) или
                \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
            `,
            "D": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0\,\)
            `,
            "E": String.raw`
                \(\,\hat\alpha_2 = \hat\beta_2\,\)
            `,},
        "true": "B",
        "explanation": String.raw`
        \( (\hat  Y_i | A_i = 0) = \hat a_0 + \hat a_2 X_i  \) <br>
        \( (\hat Y_i | A_i = 0) = \hat \beta_0 + \hat \beta_1 + (\hat \beta_2 + \hat \beta_3) X_i \) <br>
        \( \hat a_0 = \hat \beta_0 + \hat \beta_1 \) 
        `,
    
    }
    ,
    {
    "question": String.raw`(1 балл) Портос построил регрессию по 66 наблюдениям, \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 W_i + \hat\beta_3 Z_i\,\), \(\,RSS=140\,\). Затем Портос оценил вспомогательную регрессию, \(\,\hat{\hat {Y}}_i = \hat\gamma_0 + \hat\gamma_1 X_i + \hat\gamma_2 W_i + \hat\gamma_3 Z_i + \hat\delta_2 \hat Y_i^2 + \hat\delta_3 \hat Y_i^3\,\), \(\,RSS=120\,\).  При проверке гипотезы о правильной спецификации модели в тесте Рамсея \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,5\,\)
            `,
            "B": String.raw`
                \(\,11/3\,\)
            `,
            "C": String.raw`
                \(\,30/7\,\)
            `,
            "D": String.raw`
                \(\,10/3\,\)
            `,
            "E": String.raw`
                \(\,6\,\)
            `,},
        "true": "A",
        "explanation": String.raw`
        \( F = \dfrac{(RSS_R - RSS_{UR}) / q}{RSS_{UR} / (n - k - 1 - q)} \\ \)
        $$ H_0: \begin{cases}
        \delta_2 = 0 \\
        \delta_3 = 0 
        \end{cases} \Rightarrow q = 2 $$
        \( F = \dfrac{(140 - 120) / 2}{120 / (66 - 4 - 2)} = 5\)
        `,
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. 
    Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). 
    В регрессии нецентрированных переменных, \(\,\hat Y_i = \hat \beta_0 + \hat \beta_1 X_i + \hat \beta_2 Z_i\,\), оценка коэффициента \(\,\hat \beta_0\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,5\,\)
            `,
            "B": String.raw`
                \(\,2\,\)
            `,
            "C": String.raw`
                \(\,4\,\)
            `,
            "D": String.raw`
                \(\,1\,\)
            `,
            "E": String.raw`
                \(\,3\,\)
            `,},
        "true": "E",
        "explanation": String.raw`
        \( (\hat Y_i - \bar{Y}) = (X_i - \bar{X}) + 2(Z_i - \bar{Z}) \) <br>
        \( \hat Y_i = (5 - 6 + 4) + X_i + 2 Z_i \Rightarrow \beta_0 = 3 \) 
        `,
    
    }
    ,
    {
    "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: 
    \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - 
        \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. 
        Показатель \(\,R^2_{adj}\,\) МОЖЕТ увеличиться при удалении из модели группы факторов`,
    "answers": {
    
            "A": String.raw`
                \(\,X\,\), \(\,Q\,\), \(\,S\,\)
            `,
            "B": String.raw`
                \(\,X\,\), \(\,Q\,\)
            `,
            "C": String.raw`
                \(\,X\,\), \(\,S\,\)
            `,
            "D": String.raw`
                \(\,S\,\)
            `,
            "E": String.raw`
                \(\,Q\,\), \(\,S\,\)
            `,},
        "true": "A",
        "explanation": String.raw`
        \( \text{t}_\text{stat} =\dfrac{\hat \beta }{\hat \sigma} \) <br>
        По теореме о корне, \( R^2_{adj} \) может увеличиться, <br> если удалить \( r \) признаков, <br> \( \text{t}_\text{stat} \) у которых меньше \( \sqrt{r} \)
        `,
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследователь Феофан оценил с помощью МНК модель \(\,Y = \beta_0 I + \beta_1 Z + \beta_2 W + u\,\), где \(\,I\,\) --- столбец из единиц. Для матрицы факторов, \(\,X = (I Z W)\,\), известно, что \[ (X'X)^{-1} = \begin{pmatrix} 0.04 & 0.012 & -0.008 \\ 0.012 & 0.03 & -0.007 \\ -0.008 & -0.007 & 0.02 \end{pmatrix} \] Предпосылки теоремы Гаусса-Маркова выполнены. Отношение дисперсии оценки \(\,\hat \beta_0\,\) к дисперсии оценки \(\,\hat \beta_2\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,3/2\,\)
            `,
            "B": String.raw`
                \(\,-5/1\,\)
            `,
            "C": String.raw`
                \(\,1/2\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,10/3\,\)
            `,},
        "true": "D",
        "explanation": String.raw`
        На главной диагонали \( (X^T X)^{-1} \) находятся дисперсии соотв. оценок <br> 
        \( \dfrac{\hat{\text{var}} (\hat \beta_1) }{\hat{\text{var}} (\hat \beta_2)} = \dfrac{0.04}{0.02} = 2\)
        `,
    
    }
    ,
    {
    "question": String.raw`(1 балл) Выборочная корреляция между регрессорами \(\,X\,\) и \(\,Z\,\) равна \(\,0.5\,\). В регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i\,\) показатель \(\,VIF\,\) для регрессора \(\,X\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,1/2\,\)
            `,
            "B": String.raw`
                \(\,1/4\,\)
            `,
            "C": String.raw`
                \(\,3/4\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,4/3\,\)
            `,},
        "true": "E",
        "explanation": String.raw`
        \( \text{VIF} (X) = \dfrac{1}{1 - \text{corr} (X, Z)^2} = \dfrac{4}{3} \)
        `,
    
    }
    ,   
]
init_question();
var result_array=new Array(questions.length);
