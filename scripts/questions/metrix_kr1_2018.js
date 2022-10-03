questions = [{
    "question": String.raw`Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\), где \(\,\hat Y = X\hat\beta\,\), \(\,e=Y-\hat Y\,\). Величина \(\,RSS\,\) --- это квадрат длины вектора`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat Y\,\)
            `,
            "B": String.raw`
                \(\,Y-\bar Y\,\)
            `,
            "C": String.raw`
                \(\,\varepsilon\,\)
            `,
            "D": String.raw`
                \(\,e\,\)
            `,
            "E": String.raw`
                \(\,\hat Y - \bar Y\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Оказалось, что \(\,\hat \beta_0 = 90\,\), а \(\,\hat\beta_1 = 3\,\). Чебурашка увеличил переменные \(\,X\,\) и \(\,Y\,\) на 10% и снова оценил уравнение регрессии. В результате этой корректировки`,
    "answers": {
    
            "A": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) не изменились
            `,
            "B": String.raw`
                оценка \(\,\hat\beta_0\,\) уменьшилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "C": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) увеличились
            `,
            "D": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) уменьшились
            `,
            "E": String.raw`
                оценка \(\,\hat\beta_0\,\) увеличилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценивает модель регрессии \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) с помощью МНК. Чебурашка получит такую же оценку коэффициента \(\,\beta_1\,\), если будет минимизировать`,
    "answers": {
    
            "A": String.raw`
                коэффициент детерминации
            `,
            "B": String.raw`
                выборочную ковариацию регрессора и объясняемой переменной
            `,
            "C": String.raw`
                выборочную дисперсию объясняемой переменной
            `,
            "D": String.raw`
                выборочную дисперсию остатков
            `,
            "E": String.raw`
                выборочную дисперсию объясняющей переменной
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) при выполненных предпосылках теоремы Гаусса-Маркова и нормальных ошибках тестовая статистика \(\,(\hat\beta_1 - \beta_1)/se(\hat\beta_1)\,\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\,N(0;1)\,\)
            `,
            "B": String.raw`
                \(\,\chi^2_1\,\)
            `,
            "C": String.raw`
                \(\,N(0;\sigma^2)\,\)
            `,
            "D": String.raw`
                \(\,\chi^2_{n-2}\,\)
            `,
            "E": String.raw`
                \(\,t_{n-2}\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\), а Крокодил Гена --- модель \(\,X_i = \gamma_0 + \gamma_1 Y_i + u_i\,\). Оказалось, что \(\,\hat\gamma_1 = 0.25/\hat\beta_1\,\). Величина \(\,R^2\,\) в регрессии Чебурашки равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,0\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0.25\,\)
            `,
            "E": String.raw`
                \(\,0.75\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели парной линейной регрессии со свободным членом \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,RSS/(n-2)\,\)
            `,
            "B": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-2)\,\)
            `,
            "C": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-1)\,\)
            `,
            "D": String.raw`
                \(\,RSS/((n-2)\sum_i (X_i - \bar X)^2)\,\)
            `,
            "E": String.raw`
                \(\,RSS/n\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta + \varepsilon\,\) находятся по формуле`,
    "answers": {
    
            "A": String.raw`
                \(\,(XX')^{-1}Y'X\,\)
            `,
            "B": String.raw`
                \(\,(X'X)^{-1}X'Y\,\)
            `,
            "C": String.raw`
                \(\,X'Y(X'X)^{-1}\,\)
            `,
            "D": String.raw`
                \(\,(XX')^{-1}X'Y\,\)
            `,
            "E": String.raw`
                \(\,(X'X)^{-1}YX\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`По 20 наблюдениям Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Известно, что \(\,\sum X_i = -10\,\), \(\,\sum X_i^2 = 40\,\), \(\,\sum X_i Y_i = 10\,\), \(\,\sum Y_i = 50\,\).  Сумма оценок МНК коэффициентов \(\,\hat \beta_0 + \hat \beta_1\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,3\,\)
            `,
            "B": String.raw`
                \(\,5\,\)
            `,
            "C": String.raw`
                \(\,1\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,4\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  \begin{center} \begin{tabular}{ccccc} \toprule $x$ & 0 & 1 & 2 & 3 \\  $\operatorname{P}(X=x)$ & $-b$ & $0.5-b$ & $0.5+b$ & $b$ \\ \bottomrule \varepsilonnd{tabular} \varepsilonnd{center}  Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.5\,\)
            `,
            "B": String.raw`
                \(\,0.2\,\)
            `,
            "C": String.raw`
                \(\,0.3\,\)
            `,
            "D": String.raw`
                \(\,0\,\)
            `,
            "E": String.raw`
                \(\,0.4\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценивает модель регрессии \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) с помощью МНК. Чебурашка получит такую же оценку коэффициента \(\,\beta_1\,\), если будет минимизировать`,
    "answers": {
    
            "A": String.raw`
                коэффициент детерминации
            `,
            "B": String.raw`
                выборочную дисперсию объясняющей переменной
            `,
            "C": String.raw`
                выборочную дисперсию остатков
            `,
            "D": String.raw`
                выборочную дисперсию объясняемой переменной
            `,
            "E": String.raw`
                выборочную ковариацию регрессора и объясняемой переменной
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели парной линейной регрессии со свободным членом \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-1)\,\)
            `,
            "B": String.raw`
                \(\,RSS/n\,\)
            `,
            "C": String.raw`
                \(\,RSS/(n-2)\,\)
            `,
            "D": String.raw`
                \(\,RSS/((n-2)\sum_i (X_i - \bar X)^2)\,\)
            `,
            "E": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-2)\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\), а Крокодил Гена --- модель \(\,X_i = \gamma_0 + \gamma_1 Y_i + u_i\,\). Оказалось, что \(\,\hat\gamma_1 = 0.25/\hat\beta_1\,\). Величина \(\,R^2\,\) в регрессии Чебурашки равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,0\,\)
            `,
            "C": String.raw`
                \(\,0.75\,\)
            `,
            "D": String.raw`
                \(\,0.5\,\)
            `,
            "E": String.raw`
                \(\,0.25\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\), а Крокодил Гена --- модель \(\,X_i = \gamma_0 + \gamma_1 Y_i + u_i\,\). Оказалось, что \(\,\hat\gamma_1 = 0.25/\hat\beta_1\,\). Величина \(\,R^2\,\) в регрессии Чебурашки равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0\,\)
            `,
            "B": String.raw`
                \(\,0.75\,\)
            `,
            "C": String.raw`
                \(\,0.25\,\)
            `,
            "D": String.raw`
                \(\,1\,\)
            `,
            "E": String.raw`
                \(\,0.5\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Храбрый исследователь Вениамин оценил регрессию \(\,\hat Y_i = \underset{(5)}{23} + \underset{(2)}{10}X_i\,\), в скобках приведены стандартные ошибки. Доверительный интервал для свободного члена равен \(\,[14; 32]\,\). Доверительный интервал для коэффициента наклона при том же уровне доверия будет равен`,
    "answers": {
    
            "A": String.raw`
                \(\,[6; 14]\,\)
            `,
            "B": String.raw`
                \(\,[6.4; 13.6]\,\)
            `,
            "C": String.raw`
                \(\,[6.08; 13.92]\,\)
            `,
            "D": String.raw`
                \(\,[5; 15]\,\)
            `,
            "E": String.raw`
                \(\,[1; 19]\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta + \varepsilon\,\) находятся по формуле`,
    "answers": {
    
            "A": String.raw`
                \(\,(XX')^{-1}X'Y\,\)
            `,
            "B": String.raw`
                \(\,X'Y(X'X)^{-1}\,\)
            `,
            "C": String.raw`
                \(\,(X'X)^{-1}YX\,\)
            `,
            "D": String.raw`
                \(\,(XX')^{-1}Y'X\,\)
            `,
            "E": String.raw`
                \(\,(X'X)^{-1}X'Y\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\), где \(\,\hat Y = X\hat\beta\,\), \(\,e=Y-\hat Y\,\). Величина \(\,RSS\,\) --- это квадрат длины вектора`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat Y\,\)
            `,
            "B": String.raw`
                \(\,\varepsilon\,\)
            `,
            "C": String.raw`
                \(\,Y-\bar Y\,\)
            `,
            "D": String.raw`
                \(\,\hat Y - \bar Y\,\)
            `,
            "E": String.raw`
                \(\,e\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели парной линейной регрессии со свободным членом \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-2)\,\)
            `,
            "B": String.raw`
                \(\,RSS/((n-2)\sum_i (X_i - \bar X)^2)\,\)
            `,
            "C": String.raw`
                \(\,RSS/n\,\)
            `,
            "D": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-1)\,\)
            `,
            "E": String.raw`
                \(\,RSS/(n-2)\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Храбрый исследователь Вениамин оценил регрессию \(\,\hat Y_i = \underset{(5)}{23} + \underset{(2)}{10}X_i\,\), в скобках приведены стандартные ошибки. Доверительный интервал для свободного члена равен \(\,[14; 32]\,\). Доверительный интервал для коэффициента наклона при том же уровне доверия будет равен`,
    "answers": {
    
            "A": String.raw`
                \(\,[6.4; 13.6]\,\)
            `,
            "B": String.raw`
                \(\,[6; 14]\,\)
            `,
            "C": String.raw`
                \(\,[5; 15]\,\)
            `,
            "D": String.raw`
                \(\,[1; 19]\,\)
            `,
            "E": String.raw`
                \(\,[6.08; 13.92]\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`По 20 наблюдениям Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Известно, что \(\,\sum X_i = -10\,\), \(\,\sum X_i^2 = 40\,\), \(\,\sum X_i Y_i = 10\,\), \(\,\sum Y_i = 50\,\).  Сумма оценок МНК коэффициентов \(\,\hat \beta_0 + \hat \beta_1\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,4\,\)
            `,
            "B": String.raw`
                \(\,5\,\)
            `,
            "C": String.raw`
                \(\,3\,\)
            `,
            "D": String.raw`
                \(\,2\,\)
            `,
            "E": String.raw`
                \(\,1\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Оказалось, что \(\,\hat \beta_0 = 90\,\), а \(\,\hat\beta_1 = 3\,\). Чебурашка увеличил переменные \(\,X\,\) и \(\,Y\,\) на 10% и снова оценил уравнение регрессии. В результате этой корректировки`,
    "answers": {
    
            "A": String.raw`
                оценка \(\,\hat\beta_0\,\) увеличилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "B": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) не изменились
            `,
            "C": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) увеличились
            `,
            "D": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) уменьшились
            `,
            "E": String.raw`
                оценка \(\,\hat\beta_0\,\) уменьшилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) при выполненных предпосылках теоремы Гаусса-Маркова и нормальных ошибках тестовая статистика \(\,(\hat\beta_1 - \beta_1)/se(\hat\beta_1)\,\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\,\chi^2_1\,\)
            `,
            "B": String.raw`
                \(\,t_{n-2}\,\)
            `,
            "C": String.raw`
                \(\,N(0;1)\,\)
            `,
            "D": String.raw`
                \(\,N(0;\sigma^2)\,\)
            `,
            "E": String.raw`
                \(\,\chi^2_{n-2}\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`По 20 наблюдениям Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Известно, что \(\,\sum X_i = -10\,\), \(\,\sum X_i^2 = 40\,\), \(\,\sum X_i Y_i = 10\,\), \(\,\sum Y_i = 50\,\).  Сумма оценок МНК коэффициентов \(\,\hat \beta_0 + \hat \beta_1\,\) равна`,
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
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\), где \(\,\hat Y = X\hat\beta\,\), \(\,e=Y-\hat Y\,\). Величина \(\,RSS\,\) --- это квадрат длины вектора`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat Y - \bar Y\,\)
            `,
            "B": String.raw`
                \(\,e\,\)
            `,
            "C": String.raw`
                \(\,\varepsilon\,\)
            `,
            "D": String.raw`
                \(\,\hat Y\,\)
            `,
            "E": String.raw`
                \(\,Y-\bar Y\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Оказалось, что \(\,\hat \beta_0 = 90\,\), а \(\,\hat\beta_1 = 3\,\). Чебурашка увеличил переменные \(\,X\,\) и \(\,Y\,\) на 10% и снова оценил уравнение регрессии. В результате этой корректировки`,
    "answers": {
    
            "A": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) не изменились
            `,
            "B": String.raw`
                оценка \(\,\hat\beta_0\,\) увеличилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "C": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) увеличились
            `,
            "D": String.raw`
                оценка \(\,\hat\beta_0\,\) уменьшилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "E": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) уменьшились
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Рассмотрим модель множественной регрессии \(\,Y=X\beta+\varepsilon\,\), где \(\,\hat Y = X\hat\beta\,\), \(\,e=Y-\hat Y\,\). Величина \(\,RSS\,\) --- это квадрат длины вектора`,
    "answers": {
    
            "A": String.raw`
                \(\,\hat Y - \bar Y\,\)
            `,
            "B": String.raw`
                \(\,\varepsilon\,\)
            `,
            "C": String.raw`
                \(\,\hat Y\,\)
            `,
            "D": String.raw`
                \(\,Y-\bar Y\,\)
            `,
            "E": String.raw`
                \(\,e\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta + \varepsilon\,\) находятся по формуле`,
    "answers": {
    
            "A": String.raw`
                \(\,(XX')^{-1}X'Y\,\)
            `,
            "B": String.raw`
                \(\,X'Y(X'X)^{-1}\,\)
            `,
            "C": String.raw`
                \(\,(X'X)^{-1}X'Y\,\)
            `,
            "D": String.raw`
                \(\,(X'X)^{-1}YX\,\)
            `,
            "E": String.raw`
                \(\,(XX')^{-1}Y'X\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) при выполненных предпосылках теоремы Гаусса-Маркова и нормальных ошибках тестовая статистика \(\,(\hat\beta_1 - \beta_1)/se(\hat\beta_1)\,\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\,\chi^2_{n-2}\,\)
            `,
            "B": String.raw`
                \(\,N(0;\sigma^2)\,\)
            `,
            "C": String.raw`
                \(\,\chi^2_1\,\)
            `,
            "D": String.raw`
                \(\,N(0;1)\,\)
            `,
            "E": String.raw`
                \(\,t_{n-2}\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`По 20 наблюдениям Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Известно, что \(\,\sum X_i = -10\,\), \(\,\sum X_i^2 = 40\,\), \(\,\sum X_i Y_i = 10\,\), \(\,\sum Y_i = 50\,\).  Сумма оценок МНК коэффициентов \(\,\hat \beta_0 + \hat \beta_1\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,3\,\)
            `,
            "B": String.raw`
                \(\,4\,\)
            `,
            "C": String.raw`
                \(\,5\,\)
            `,
            "D": String.raw`
                \(\,1\,\)
            `,
            "E": String.raw`
                \(\,2\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Оценки МНК вектора коэффициентов регрессии \(\,Y=X\beta + \varepsilon\,\) находятся по формуле`,
    "answers": {
    
            "A": String.raw`
                \(\,(X'X)^{-1}YX\,\)
            `,
            "B": String.raw`
                \(\,X'Y(X'X)^{-1}\,\)
            `,
            "C": String.raw`
                \(\,(X'X)^{-1}X'Y\,\)
            `,
            "D": String.raw`
                \(\,(XX')^{-1}Y'X\,\)
            `,
            "E": String.raw`
                \(\,(XX')^{-1}X'Y\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  \begin{center} \begin{tabular}{ccccc} \toprule $x$ & 0 & 1 & 2 & 3 \\  $\operatorname{P}(X=x)$ & $-b$ & $0.5-b$ & $0.5+b$ & $b$ \\ \bottomrule \varepsilonnd{tabular} \varepsilonnd{center}  Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.2\,\)
            `,
            "B": String.raw`
                \(\,0.4\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0\,\)
            `,
            "E": String.raw`
                \(\,0.3\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценил с помощью МНК зависимость \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\). Оказалось, что \(\,\hat \beta_0 = 90\,\), а \(\,\hat\beta_1 = 3\,\). Чебурашка увеличил переменные \(\,X\,\) и \(\,Y\,\) на 10% и снова оценил уравнение регрессии. В результате этой корректировки`,
    "answers": {
    
            "A": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) увеличились
            `,
            "B": String.raw`
                оценка \(\,\hat\beta_0\,\) увеличилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "C": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) уменьшились
            `,
            "D": String.raw`
                оценка \(\,\hat\beta_0\,\) уменьшилась, а оценка \(\,\hat\beta_1\,\) не
изменилась
            `,
            "E": String.raw`
                оценки \(\,\hat\beta_0\,\) и \(\,\hat\beta_1\,\) не изменились
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Храбрый исследователь Вениамин оценил регрессию \(\,\hat Y_i = \underset{(5)}{23} + \underset{(2)}{10}X_i\,\), в скобках приведены стандартные ошибки. Доверительный интервал для свободного члена равен \(\,[14; 32]\,\). Доверительный интервал для коэффициента наклона при том же уровне доверия будет равен`,
    "answers": {
    
            "A": String.raw`
                \(\,[6.08; 13.92]\,\)
            `,
            "B": String.raw`
                \(\,[6; 14]\,\)
            `,
            "C": String.raw`
                \(\,[5; 15]\,\)
            `,
            "D": String.raw`
                \(\,[1; 19]\,\)
            `,
            "E": String.raw`
                \(\,[6.4; 13.6]\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Чебурашка оценил модель \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\), а Крокодил Гена --- модель \(\,X_i = \gamma_0 + \gamma_1 Y_i + u_i\,\). Оказалось, что \(\,\hat\gamma_1 = 0.25/\hat\beta_1\,\). Величина \(\,R^2\,\) в регрессии Чебурашки равна`,
    "answers": {
    
            "A": String.raw`
                \(\,1\,\)
            `,
            "B": String.raw`
                \(\,0.5\,\)
            `,
            "C": String.raw`
                \(\,0\,\)
            `,
            "D": String.raw`
                \(\,0.75\,\)
            `,
            "E": String.raw`
                \(\,0.25\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценивает модель регрессии \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) с помощью МНК. Чебурашка получит такую же оценку коэффициента \(\,\beta_1\,\), если будет минимизировать`,
    "answers": {
    
            "A": String.raw`
                выборочную дисперсию объясняющей переменной
            `,
            "B": String.raw`
                коэффициент детерминации
            `,
            "C": String.raw`
                выборочную ковариацию регрессора и объясняемой переменной
            `,
            "D": String.raw`
                выборочную дисперсию объясняемой переменной
            `,
            "E": String.raw`
                выборочную дисперсию остатков
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  \begin{center} \begin{tabular}{ccccc} \toprule $x$ & 0 & 1 & 2 & 3 \\  $\operatorname{P}(X=x)$ & $-b$ & $0.5-b$ & $0.5+b$ & $b$ \\ \bottomrule \varepsilonnd{tabular} \varepsilonnd{center}  Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.4\,\)
            `,
            "B": String.raw`
                \(\,0.2\,\)
            `,
            "C": String.raw`
                \(\,0.5\,\)
            `,
            "D": String.raw`
                \(\,0\,\)
            `,
            "E": String.raw`
                \(\,0.3\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  \begin{center} \begin{tabular}{ccccc} \toprule $x$ & 0 & 1 & 2 & 3 \\  $\operatorname{P}(X=x)$ & $-b$ & $0.5-b$ & $0.5+b$ & $b$ \\ \bottomrule \varepsilonnd{tabular} \varepsilonnd{center}  Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
    "answers": {
    
            "A": String.raw`
                \(\,0.5\,\)
            `,
            "B": String.raw`
                \(\,0.3\,\)
            `,
            "C": String.raw`
                \(\,0\,\)
            `,
            "D": String.raw`
                \(\,0.4\,\)
            `,
            "E": String.raw`
                \(\,0.2\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Крокодил Гена оценивает модель регрессии \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) с помощью МНК. Чебурашка получит такую же оценку коэффициента \(\,\beta_1\,\), если будет минимизировать`,
    "answers": {
    
            "A": String.raw`
                выборочную дисперсию объясняемой переменной
            `,
            "B": String.raw`
                выборочную ковариацию регрессора и объясняемой переменной
            `,
            "C": String.raw`
                выборочную дисперсию объясняющей переменной
            `,
            "D": String.raw`
                коэффициент детерминации
            `,
            "E": String.raw`
                выборочную дисперсию остатков
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели парной линейной регрессии со свободным членом \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) несмещённой оценкой дисперсии оценки МНК \(\,\hat\beta_1\,\) является`,
    "answers": {
    
            "A": String.raw`
                \(\,RSS/n\,\)
            `,
            "B": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-2)\,\)
            `,
            "C": String.raw`
                \(\,RSS/(n-2)\,\)
            `,
            "D": String.raw`
                \(\,\sum (Y_i - \bar Y)^2 / (n-1)\,\)
            `,
            "E": String.raw`
                \(\,RSS/((n-2)\sum_i (X_i - \bar X)^2)\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`Храбрый исследователь Вениамин оценил регрессию \(\,\hat Y_i = \underset{(5)}{23} + \underset{(2)}{10}X_i\,\), в скобках приведены стандартные ошибки. Доверительный интервал для свободного члена равен \(\,[14; 32]\,\). Доверительный интервал для коэффициента наклона при том же уровне доверия будет равен`,
    "answers": {
    
            "A": String.raw`
                \(\,[6; 14]\,\)
            `,
            "B": String.raw`
                \(\,[6.4; 13.6]\,\)
            `,
            "C": String.raw`
                \(\,[5; 15]\,\)
            `,
            "D": String.raw`
                \(\,[6.08; 13.92]\,\)
            `,
            "E": String.raw`
                \(\,[1; 19]\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    {
    "question": String.raw`В модели \(\,Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\,\) при выполненных предпосылках теоремы Гаусса-Маркова и нормальных ошибках тестовая статистика \(\,(\hat\beta_1 - \beta_1)/se(\hat\beta_1)\,\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                \(\,t_{n-2}\,\)
            `,
            "B": String.raw`
                \(\,N(0;1)\,\)
            `,
            "C": String.raw`
                \(\,\chi^2_{n-2}\,\)
            `,
            "D": String.raw`
                \(\,\chi^2_1\,\)
            `,
            "E": String.raw`
                \(\,N(0;\sigma^2)\,\)
            `,},
        "true": "A",
        "explanation": "Правильные ответы найти пока что не удалось.",
    
    }
    ,
    ]
init_question();var result_array=new Array(questions.length);