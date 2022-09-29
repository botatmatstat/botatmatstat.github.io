questions = [{
    "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
            `,
            "B": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "C": String.raw`
                \(\,\ln(Y_i/W_i^2) = \gamma_0 + \gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "D": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "E": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что \[ X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \; \; X'Y = \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \;\; \sum_{i=1}^n Y_i^2 = 140. \] Коэффициент \(\,R^2\,\) в этой модели равен`,
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
        "explanation": "",
    
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
        "explanation": "",
    
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
                \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\)
            `,
            "C": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
            `,
            "D": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0\,\)
            `,
            "E": String.raw`
                \(\,\hat\alpha_2 = \hat\beta_2\,\)
            `,},
        "true": "B",
        "explanation": "",
    
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
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). В регрессии нецентрированных переменных, \(\,\hat Y_i = \hb_0 + \hb_1 X_i + \hb_2 Z_i\,\), оценка коэффициента \(\,\hb_0\,\) равна`,
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
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. Показатель \(\,R^2_{adj}\,\) \emph{может} увеличиться при удалении из модели группы факторов`,
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
        "explanation": "",
    
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
        "explanation": "",
    
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
        "explanation": "",
    
    }
    ,   
    {
        "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что \[ X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \; \; X'Y = \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \;\; \sum_{i=1}^n Y_i^2 = 140. \] Коэффициент \(\,R^2\,\) в этой модели равен`,
        "answers": {
        
                "A": String.raw`
                    \(\,9/35\,\)
                `,
                "B": String.raw`
                    недостаточно информации
                `,
                "C": String.raw`
                    \(\,13/14\,\)
                `,
                "D": String.raw`
                    \(\,0.5\,\)
                `,
                "E": String.raw`
                    \(\,0.6\,\)
                `,},
            "true": "E",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(1 балл) Какое условие НЕ требуется в теореме Гаусса-Маркова?`,
        "answers": {
        
                "A": String.raw`
                    матрица регрессоров \(\,X\,\) имеет полный ранг
                `,
                "B": String.raw`
                    модель \(\,Y=X\beta + \varepsilon\,\) правильно специфицирована
                `,
                "C": String.raw`
                    случайные ошибки \(\,\varepsilon_i\,\) не коррелированы
                `,
                "D": String.raw`
                    случайные ошибки \(\,\varepsilon_i\,\) имеют одинаковые дисперсии
                `,
                "E": String.raw`
                    случайные ошибки \(\,\varepsilon_i\,\) нормально распределены
                `,},
            "true": "E",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. Показатель \(\,R^2_{adj}\,\) \emph{может} увеличиться при удалении из модели группы факторов`,
        "answers": {
        
                "A": String.raw`
                    \(\,S\,\)
                `,
                "B": String.raw`
                    \(\,X\,\), \(\,Q\,\)
                `,
                "C": String.raw`
                    \(\,X\,\), \(\,S\,\)
                `,
                "D": String.raw`
                    \(\,X\,\), \(\,Q\,\), \(\,S\,\)
                `,
                "E": String.raw`
                    \(\,Q\,\), \(\,S\,\)
                `,},
            "true": "D",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(2 балла) Для регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i + \hat\beta_3 W_i\,\), оценённой по 24 наблюдениям, \(\,R^2=0.9\,\).  При проверке гипотезы о неадекватности модели \(\,F\,\)-статистика равна`,
        "answers": {
        
                "A": String.raw`
                    \(\,200.27\,\)
                `,
                "B": String.raw`
                    \(\,5/9\,\)
                `,
                "C": String.raw`
                    \(\,45\,\)
                `,
                "D": String.raw`
                    \(\,189/2\,\)
                `,
                "E": String.raw`
                    \(\,60\,\)
                `,},
            "true": "E",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(1 балл) Исследователь Феофан оценил с помощью МНК модель \(\,Y = \beta_0 I + \beta_1 Z + \beta_2 W + u\,\), где \(\,I\,\) — столбец из единиц. Для матрицы факторов, \(\,X = (I Z W)\,\), известно, что \[ (X'X)^{-1} = \begin{pmatrix} 0.04 & 0.012 & -0.008 \\ 0.012 & 0.03 & -0.007 \\ -0.008 & -0.007 & 0.02 \end{pmatrix} \] Предпосылки теоремы Гаусса-Маркова выполнены. Отношение дисперсии оценки \(\,\hat \beta_0\,\) к дисперсии оценки \(\,\hat \beta_2\,\) равно`,
        "answers": {
        
                "A": String.raw`
                    \(\,2\,\)
                `,
                "B": String.raw`
                    \(\,-5/1\,\)
                `,
                "C": String.raw`
                    \(\,10/3\,\)
                `,
                "D": String.raw`
                    \(\,1/2\,\)
                `,
                "E": String.raw`
                    \(\,3/2\,\)
                `,},
            "true": "A",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). В регрессии нецентрированных переменных, \(\,\hat Y_i = \hb_0 + \hb_1 X_i + \hb_2 Z_i\,\), оценка коэффициента \(\,\hb_0\,\) равна`,
        "answers": {
        
                "A": String.raw`
                    \(\,1\,\)
                `,
                "B": String.raw`
                    \(\,4\,\)
                `,
                "C": String.raw`
                    \(\,2\,\)
                `,
                "D": String.raw`
                    \(\,5\,\)
                `,
                "E": String.raw`
                    \(\,3\,\)
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
                    \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
                `,
                "C": String.raw`
                    \(\,\hat\alpha_0 = \hat\beta_0\,\)
                `,
                "D": String.raw`
                    \(\,\hat\alpha_2 = \hat\beta_2\,\)
                `,
                "E": String.raw`
                    \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\)
                `,},
            "true": "E",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(1 балл) Портос построил регрессию по 66 наблюдениям, \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 W_i + \hat\beta_3 Z_i\,\), \(\,RSS=140\,\). Затем Портос оценил вспомогательную регрессию, \(\,\hat{\hat {Y}}_i = \hat\gamma_0 + \hat\gamma_1 X_i + \hat\gamma_2 W_i + \hat\gamma_3 Z_i + \hat\delta_2 \hat Y_i^2 + \hat\delta_3 \hat Y_i^3\,\), \(\,RSS=120\,\).  При проверке гипотезы о правильной спецификации модели в тесте Рамсея \(\,F\,\)-статистика равна`,
        "answers": {
        
                "A": String.raw`
                    \(\,5\,\)
                `,
                "B": String.raw`
                    \(\,10/3\,\)
                `,
                "C": String.raw`
                    \(\,6\,\)
                `,
                "D": String.raw`
                    \(\,30/7\,\)
                `,
                "E": String.raw`
                    \(\,11/3\,\)
                `,},
            "true": "A",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
        "answers": {
        
                "A": String.raw`
                    \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
                `,
                "B": String.raw`
                    \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
                `,
                "C": String.raw`
                    \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
                `,
                "D": String.raw`
                    \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
                `,
                "E": String.raw`
                    \(\,\ln(Y_i/W_i^2) = \gamma_0 + \gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
                `,},
            "true": "D",
            "explanation": "",
        
        }
        ,
        {
        "question": String.raw`(1 балл) Выборочная корреляция между регрессорами \(\,X\,\) и \(\,Z\,\) равна \(\,0.5\,\). В регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i\,\) показатель \(\,VIF\,\) для регрессора \(\,X\,\) равен`,
        "answers": {
        
                "A": String.raw`
                    \(\,1/4\,\)
                `,
                "B": String.raw`
                    \(\,4/3\,\)
                `,
                "C": String.raw`
                    \(\,1/2\,\)
                `,
                "D": String.raw`
                    \(\,2\,\)
                `,
                "E": String.raw`
                    \(\,3/4\,\)
                `,},
            "true": "B",
            "explanation": "",
        
        }
        ,
{
    "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. Показатель \(\,R^2_{adj}\,\) \emph{может} увеличиться при удалении из модели группы факторов`,
    "answers": {
    
            "A": String.raw`
                \(\,X\,\), \(\,S\,\)
            `,
            "B": String.raw`
                \(\,X\,\), \(\,Q\,\), \(\,S\,\)
            `,
            "C": String.raw`
                \(\,S\,\)
            `,
            "D": String.raw`
                \(\,Q\,\), \(\,S\,\)
            `,
            "E": String.raw`
                \(\,X\,\), \(\,Q\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "B": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "C": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
            `,
            "D": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "E": String.raw`
                \(\,\ln(Y_i/W_i^2) = \gamma_0 + \gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). В регрессии нецентрированных переменных, \(\,\hat Y_i = \hb_0 + \hb_1 X_i + \hb_2 Z_i\,\), оценка коэффициента \(\,\hb_0\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,2\,\)
            `,
            "B": String.raw`
                \(\,3\,\)
            `,
            "C": String.raw`
                \(\,4\,\)
            `,
            "D": String.raw`
                \(\,5\,\)
            `,
            "E": String.raw`
                \(\,1\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Выборочная корреляция между регрессорами \(\,X\,\) и \(\,Z\,\) равна \(\,0.5\,\). В регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i\,\) показатель \(\,VIF\,\) для регрессора \(\,X\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,1/4\,\)
            `,
            "B": String.raw`
                \(\,1/2\,\)
            `,
            "C": String.raw`
                \(\,4/3\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,3/4\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследователь Феофан оценил с помощью МНК модель \(\,Y = \beta_0 I + \beta_1 Z + \beta_2 W + u\,\), где \(\,I\,\) --- столбец из единиц. Для матрицы факторов, \(\,X = (I Z W)\,\), известно, что \[ (X'X)^{-1} = \begin{pmatrix} 0.04 & 0.012 & -0.008 \\ 0.012 & 0.03 & -0.007 \\ -0.008 & -0.007 & 0.02 \end{pmatrix} \] Предпосылки теоремы Гаусса-Маркова выполнены. Отношение дисперсии оценки \(\,\hat \beta_0\,\) к дисперсии оценки \(\,\hat \beta_2\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,2\,\)
            `,
            "B": String.raw`
                \(\,-5/1\,\)
            `,
            "C": String.raw`
                \(\,1/2\,\)
            `,
            "D": String.raw`
                \(\,10/3\,\)
            `,
            "E": String.raw`
                \(\,3/2\,\)
            `,},
        "true": "A",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Какое условие НЕ требуется в теореме Гаусса-Маркова?`,
    "answers": {
    
            "A": String.raw`
                матрица регрессоров \(\,X\,\) имеет полный ранг
            `,
            "B": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) имеют одинаковые дисперсии
            `,
            "C": String.raw`
                модель \(\,Y=X\beta + \varepsilon\,\) правильно специфицирована
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
                \(\,\hat\alpha_0 = \hat\beta_0\,\)
            `,
            "C": String.raw`
                \(\,\hat\alpha_2 = \hat\beta_2\,\)
            `,
            "D": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
            `,
            "E": String.raw`
                \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i + \hat\beta_3 W_i\,\), оценённой по 24 наблюдениям, \(\,R^2=0.9\,\).  При проверке гипотезы о неадекватности модели \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,5/9\,\)
            `,
            "B": String.raw`
                \(\,60\,\)
            `,
            "C": String.raw`
                \(\,189/2\,\)
            `,
            "D": String.raw`
                \(\,45\,\)
            `,
            "E": String.raw`
                \(\,200.27\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Портос построил регрессию по 66 наблюдениям, \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 W_i + \hat\beta_3 Z_i\,\), \(\,RSS=140\,\). Затем Портос оценил вспомогательную регрессию, \(\,\hat{\hat {Y}}_i = \hat\gamma_0 + \hat\gamma_1 X_i + \hat\gamma_2 W_i + \hat\gamma_3 Z_i + \hat\delta_2 \hat Y_i^2 + \hat\delta_3 \hat Y_i^3\,\), \(\,RSS=120\,\).  При проверке гипотезы о правильной спецификации модели в тесте Рамсея \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,30/7\,\)
            `,
            "B": String.raw`
                \(\,11/3\,\)
            `,
            "C": String.raw`
                \(\,5\,\)
            `,
            "D": String.raw`
                \(\,6\,\)
            `,
            "E": String.raw`
                \(\,10/3\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что \[ X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \; \; X'Y = \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \;\; \sum_{i=1}^n Y_i^2 = 140. \] Коэффициент \(\,R^2\,\) в этой модели равен`,
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
                \(\,9/35\,\)
            `,
            "E": String.raw`
                недостаточно информации, чтобы вычислить \(\,R^2\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
{
    "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). В регрессии нецентрированных переменных, \(\,\hat Y_i = \hb_0 + \hb_1 X_i + \hb_2 Z_i\,\), оценка коэффициента \(\,\hb_0\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,5\,\)
            `,
            "B": String.raw`
                \(\,2\,\)
            `,
            "C": String.raw`
                \(\,1\,\)
            `,
            "D": String.raw`
                \(\,3\,\)
            `,
            "E": String.raw`
                \(\,4\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. Показатель \(\,R^2_{adj}\,\) \emph{может} увеличиться при удалении из модели группы факторов`,
    "answers": {
    
            "A": String.raw`
                \(\,S\,\)
            `,
            "B": String.raw`
                \(\,X\,\), \(\,S\,\)
            `,
            "C": String.raw`
                \(\,Q\,\), \(\,S\,\)
            `,
            "D": String.raw`
                \(\,X\,\), \(\,Q\,\)
            `,
            "E": String.raw`
                \(\,X\,\), \(\,Q\,\), \(\,S\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Чудо-швабры производятся на разных заводах по одной из двух технологий, \(\,A\,\) или \(\,B\,\). Исследователь оценил две модели зависимости выпуска, \(\,Y\,\), от количества сырья, \(\,X\,\), и технологии:  \(\,\hat Y_i = \hat \alpha_0 + \hat\alpha_1 A_i + \hat\alpha_2 X_i + \hat\alpha_3 A_i X_i\,\);  \(\,\hat Y_i = \hat \beta_0 + \hat\beta_1 B_i + \hat\beta_2 X_i + \hat\beta_3 B_i X_i\,\).  Переменная \(\,A_i\,\) равна единице для заводов с технологией \(\,A\,\) и нулю иначе, а переменная \(\,B_i\,\) равна единице для заводов с технологией \(\,B\,\) и нулю иначе.  Оценки коэффициентов связаны соотношением`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0\,\)
            `,
            "B": String.raw`
                \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\)
            `,
            "C": String.raw`
                \(\,\hat\alpha_1 = \hat\beta_0\,\)
            `,
            "D": String.raw`
                \(\,\hat\alpha_2 = \hat\beta_2\,\)
            `,
            "E": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Портос построил регрессию по 66 наблюдениям, \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 W_i + \hat\beta_3 Z_i\,\), \(\,RSS=140\,\). Затем Портос оценил вспомогательную регрессию, \(\,\hat{\hat {Y}}_i = \hat\gamma_0 + \hat\gamma_1 X_i + \hat\gamma_2 W_i + \hat\gamma_3 Z_i + \hat\delta_2 \hat Y_i^2 + \hat\delta_3 \hat Y_i^3\,\), \(\,RSS=120\,\).  При проверке гипотезы о правильной спецификации модели в тесте Рамсея \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,30/7\,\)
            `,
            "B": String.raw`
                \(\,6\,\)
            `,
            "C": String.raw`
                \(\,10/3\,\)
            `,
            "D": String.raw`
                \(\,11/3\,\)
            `,
            "E": String.raw`
                \(\,5\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i + \hat\beta_3 W_i\,\), оценённой по 24 наблюдениям, \(\,R^2=0.9\,\).  При проверке гипотезы о неадекватности модели \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,45\,\)
            `,
            "B": String.raw`
                \(\,200.27\,\)
            `,
            "C": String.raw`
                \(\,189/2\,\)
            `,
            "D": String.raw`
                \(\,5/9\,\)
            `,
            "E": String.raw`
                \(\,60\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Выборочная корреляция между регрессорами \(\,X\,\) и \(\,Z\,\) равна \(\,0.5\,\). В регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i\,\) показатель \(\,VIF\,\) для регрессора \(\,X\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,2\,\)
            `,
            "B": String.raw`
                \(\,3/4\,\)
            `,
            "C": String.raw`
                \(\,4/3\,\)
            `,
            "D": String.raw`
                \(\,1/2\,\)
            `,
            "E": String.raw`
                \(\,1/4\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследователь Феофан оценил с помощью МНК модель \(\,Y = \beta_0 I + \beta_1 Z + \beta_2 W + u\,\), где \(\,I\,\) --- столбец из единиц. Для матрицы факторов, \(\,X = (I Z W)\,\), известно, что \[ (X'X)^{-1} = \begin{pmatrix} 0.04 & 0.012 & -0.008 \\ 0.012 & 0.03 & -0.007 \\ -0.008 & -0.007 & 0.02 \end{pmatrix} \] Предпосылки теоремы Гаусса-Маркова выполнены. Отношение дисперсии оценки \(\,\hat \beta_0\,\) к дисперсии оценки \(\,\hat \beta_2\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,10/3\,\)
            `,
            "B": String.raw`
                \(\,3/2\,\)
            `,
            "C": String.raw`
                \(\,2\,\)
            `,
            "D": String.raw`
                \(\,1/2\,\)
            `,
            "E": String.raw`
                \(\,-5/1\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "B": String.raw`
                \(\,\ln(Y_i/W_i^2) = \gamma_0 + \gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "C": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "D": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
            `,
            "E": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что \[ X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \; \; X'Y = \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \;\; \sum_{i=1}^n Y_i^2 = 140. \] Коэффициент \(\,R^2\,\) в этой модели равен`,
    "answers": {
    
            "A": String.raw`
                \(\,13/14\,\)
            `,
            "B": String.raw`
                \(\,9/35\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0.6\,\)
            `,
            "E": String.raw`
                недостаточно информации
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Какое условие НЕ требуется в теореме Гаусса-Маркова?`,
    "answers": {
    
            "A": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) имеют одинаковые дисперсии
            `,
            "B": String.raw`
                модель \(\,Y=X\beta + \varepsilon\,\) правильно специфицирована
            `,
            "C": String.raw`
                матрица регрессоров \(\,X\,\) имеет полный ранг
            `,
            "D": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) нормально распределены
            `,
            "E": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) не коррелированы
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
{
    "question": String.raw`(1 балл) Исследовательница Надежда оценила регрессию в отклонениях, \(\,\hat y_i = x_i + 2 z_i\,\) с помощью МНК. Известно, что \(\,\bar Y=5\,\), \(\,\bar X =6\,\), \(\,\bar Z=-2\,\). В регрессии нецентрированных переменных, \(\,\hat Y_i = \hb_0 + \hb_1 X_i + \hb_2 Z_i\,\), оценка коэффициента \(\,\hb_0\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,5\,\)
            `,
            "B": String.raw`
                \(\,2\,\)
            `,
            "C": String.raw`
                \(\,1\,\)
            `,
            "D": String.raw`
                \(\,3\,\)
            `,
            "E": String.raw`
                \(\,4\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Арамис построил регрессию по 66 наблюдениям: \[ \hat Y_i = \underset{(0.4)}{4} + \underset{(5)}{6}X_i + \underset{(2)}{4.4} Z_i - \underset{(2)}{3} Q_i - \underset{(3)}{9} R_i + \underset{(10)}{16} S_i. \] В скобках указаны стандартные ошибки. Показатель \(\,R^2_{adj}\,\) \emph{может} увеличиться при удалении из модели группы факторов`,
    "answers": {
    
            "A": String.raw`
                \(\,S\,\)
            `,
            "B": String.raw`
                \(\,X\,\), \(\,S\,\)
            `,
            "C": String.raw`
                \(\,Q\,\), \(\,S\,\)
            `,
            "D": String.raw`
                \(\,X\,\), \(\,Q\,\)
            `,
            "E": String.raw`
                \(\,X\,\), \(\,Q\,\), \(\,S\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Чудо-швабры производятся на разных заводах по одной из двух технологий, \(\,A\,\) или \(\,B\,\). Исследователь оценил две модели зависимости выпуска, \(\,Y\,\), от количества сырья, \(\,X\,\), и технологии:  \(\,\hat Y_i = \hat \alpha_0 + \hat\alpha_1 A_i + \hat\alpha_2 X_i + \hat\alpha_3 A_i X_i\,\);  \(\,\hat Y_i = \hat \beta_0 + \hat\beta_1 B_i + \hat\beta_2 X_i + \hat\beta_3 B_i X_i\,\).  Переменная \(\,A_i\,\) равна единице для заводов с технологией \(\,A\,\) и нулю иначе, а переменная \(\,B_i\,\) равна единице для заводов с технологией \(\,B\,\) и нулю иначе.  Оценки коэффициентов связаны соотношением`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0\,\)
            `,
            "B": String.raw`
                \(\,\hat\alpha_0 + \hat\alpha_1 = \hat\beta_0\,\)
            `,
            "C": String.raw`
                \(\,\hat\alpha_1 = \hat\beta_0\,\)
            `,
            "D": String.raw`
                \(\,\hat\alpha_2 = \hat\beta_2\,\)
            `,
            "E": String.raw`
                \(\,\hat\alpha_0 = \hat\beta_0 + \hat\beta_1\,\)
            `,},
        "true": "B",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Портос построил регрессию по 66 наблюдениям, \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 W_i + \hat\beta_3 Z_i\,\), \(\,RSS=140\,\). Затем Портос оценил вспомогательную регрессию, \(\,\hat{\hat {Y}}_i = \hat\gamma_0 + \hat\gamma_1 X_i + \hat\gamma_2 W_i + \hat\gamma_3 Z_i + \hat\delta_2 \hat Y_i^2 + \hat\delta_3 \hat Y_i^3\,\), \(\,RSS=120\,\).  При проверке гипотезы о правильной спецификации модели в тесте Рамсея \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,30/7\,\)
            `,
            "B": String.raw`
                \(\,6\,\)
            `,
            "C": String.raw`
                \(\,10/3\,\)
            `,
            "D": String.raw`
                \(\,11/3\,\)
            `,
            "E": String.raw`
                \(\,5\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i + \hat\beta_3 W_i\,\), оценённой по 24 наблюдениям, \(\,R^2=0.9\,\).  При проверке гипотезы о неадекватности модели \(\,F\,\)-статистика равна`,
    "answers": {
    
            "A": String.raw`
                \(\,45\,\)
            `,
            "B": String.raw`
                \(\,200.27\,\)
            `,
            "C": String.raw`
                \(\,189/2\,\)
            `,
            "D": String.raw`
                \(\,5/9\,\)
            `,
            "E": String.raw`
                \(\,60\,\)
            `,},
        "true": "E",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Выборочная корреляция между регрессорами \(\,X\,\) и \(\,Z\,\) равна \(\,0.5\,\). В регрессии \(\,\hat Y_i = \hat\beta_0 + \hat\beta_1 X_i + \hat\beta_2 Z_i\,\) показатель \(\,VIF\,\) для регрессора \(\,X\,\) равен`,
    "answers": {
    
            "A": String.raw`
                \(\,2\,\)
            `,
            "B": String.raw`
                \(\,3/4\,\)
            `,
            "C": String.raw`
                \(\,4/3\,\)
            `,
            "D": String.raw`
                \(\,1/2\,\)
            `,
            "E": String.raw`
                \(\,1/4\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Исследователь Феофан оценил с помощью МНК модель \(\,Y = \beta_0 I + \beta_1 Z + \beta_2 W + u\,\), где \(\,I\,\) --- столбец из единиц. Для матрицы факторов, \(\,X = (I Z W)\,\), известно, что \[ (X'X)^{-1} = \begin{pmatrix} 0.04 & 0.012 & -0.008 \\ 0.012 & 0.03 & -0.007 \\ -0.008 & -0.007 & 0.02 \end{pmatrix} \] Предпосылки теоремы Гаусса-Маркова выполнены. Отношение дисперсии оценки \(\,\hat \beta_0\,\) к дисперсии оценки \(\,\hat \beta_2\,\) равно`,
    "answers": {
    
            "A": String.raw`
                \(\,10/3\,\)
            `,
            "B": String.raw`
                \(\,3/2\,\)
            `,
            "C": String.raw`
                \(\,2\,\)
            `,
            "D": String.raw`
                \(\,1/2\,\)
            `,
            "E": String.raw`
                \(\,-5/1\,\)
            `,},
        "true": "C",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Исследовательница Клеопатра оценила модель \(\,\ln Y_i = \beta_0 + \beta_1 \ln X_i + \beta_2 \ln Z_i + \beta_3 \ln W_i + u_i\,\). Клеопатра хочет протестировать гипотезу \(\,H_0\,\): \(\,\beta_3 + 2\beta_1 = 1\,\). Для этой цели можно оценить вспомогательную регрессию`,
    "answers": {
    
            "A": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i/W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "B": String.raw`
                \(\,\ln(Y_i/W_i^2) = \gamma_0 + \gamma_1 \ln (X_i/W_i) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "C": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,
            "D": String.raw`
                \(\,\ln(Y_i/W_i) = \gamma_0 + \gamma_1 \ln(X_i/W_i^2) + \gamma_2 \ln{Z_i} + u_i\,\)
            `,
            "E": String.raw`
                \(\,\ln(Y_i \cdot W_i) = \gamma_0 + \gamma_1 \ln (X_i \cdot W_i^2) + \gamma_2 \ln Z_i + u_i\,\)
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(2 балла) Для регрессионной модели со свободным членом известно, что \[ X'X = \begin{pmatrix} 20 & 0 & 0 \\ 0 & 4 & 3 \\ 0 & 3 & 5 \end{pmatrix}, \; \; X'Y = \begin{pmatrix} 40 \\ 10 \\ 13 \end{pmatrix}, \;\; \sum_{i=1}^n Y_i^2 = 140. \] Коэффициент \(\,R^2\,\) в этой модели равен`,
    "answers": {
    
            "A": String.raw`
                \(\,13/14\,\)
            `,
            "B": String.raw`
                \(\,9/35\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0.6\,\)
            `,
            "E": String.raw`
                недостаточно информации
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
    {
    "question": String.raw`(1 балл) Какое условие НЕ требуется в теореме Гаусса-Маркова?`,
    "answers": {
    
            "A": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) имеют одинаковые дисперсии
            `,
            "B": String.raw`
                модель \(\,Y=X\beta + \varepsilon\,\) правильно специфицирована
            `,
            "C": String.raw`
                матрица регрессоров \(\,X\,\) имеет полный ранг
            `,
            "D": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) нормально распределены
            `,
            "E": String.raw`
                случайные ошибки \(\,\varepsilon_i\,\) не коррелированы
            `,},
        "true": "D",
        "explanation": "",
    
    }
    ,
        ]

init_question();   
var result_array = new Array(questions.length);