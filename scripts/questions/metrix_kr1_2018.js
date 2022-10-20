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
        "true": "D",
        "explanation": String.raw`$$ RSS = ||Y - \hat Y||^2 $$`,
    
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
        "true": "E",
        "explanation": String.raw`
            $$ \hat \beta_1^{new} = \frac{\hat{\text{cov}(1.1 \cdot X, 1.1 \cdot Y)}}{D(1.1 \cdot X)} = \frac{1.1^2}{1.1^2} \cdot \beta_1 = \beta_1 $$
            $$ \hat \beta_0^{new} = 1.1 \cdot \bar{Y} - 1.1 \cdot \beta_1 \cdot \bar{X} = 1.1 (\bar{Y} - \beta_1 \bar{X}) = 1.1\beta_0$$
        `,
    
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
        "true": "D",
        "explanation": String.raw`$$\sigma^2_\varepsilon = \frac{RSS}{n-2}$$`,
    
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
        "true": "E",
        "explanation": String.raw`$$ t_{stat} = \frac{\hat \beta - \beta^*}{s.e.(\hat \beta)} \sim t_{n-2} $$`,
    
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
        "true": "D",
        "explanation": String.raw`
        $$\beta_1 = \frac{\text{cov} (X, Y)}{\text{var} (X) }$$
        $$ \gamma_1 = \frac{\text{cov} (X, Y)}{\text{var} (Y) }$$
        $$ \hat \beta_1 \cdot \hat \gamma_1 = \text{corr}(X, Y)^2 = R^2 $$
        $$ R^2 = \beta_1 \cdot \frac{0.25}{\beta_1} = 0.25 $$
        `,
    
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
        "true": "D",
        "explanation": String.raw`
           \( \text{Var} (\beta_1) = \frac {\sigma_{\varepsilon}^2}{\sum (X_i - \bar{X})^2} = \) \( \frac{RSS}{(n-2) \sum (X_i - \bar{X})^2} \)
        `,
    
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
        "true": "B",
        "explanation": "Учтём, что в эконометрике используют весьма специфичные знаки для транспонирования. $$ ",
    
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
        "true": "C",
        "explanation": String.raw`
                $$ \hat \beta_1 = \frac{\bar{XY} - \bar{X} \cdot \bar{Y}}{\bar{X^2} - (\bar{X})^2} = 1$$
        `,
    
    }
    ,
    {
    "question": String.raw`Распределение случайной величины \(\,X\,\) задано таблицей  
    $$ \begin{pmatrix}
        x & 0 & 1 & 2 & 3 \\
        P(X=x) & -b & 0.5 -b & 0.5 + b & b
        \end{pmatrix}
    $$
    Вероятность \(\,\operatorname{P}(X=1)\,\) равна`,
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
        "explanation": String.raw`
        $$ -b + 0.5 - b + 0.5 + b + b = 1 + 2b = 1 \Rightarrow b = 0 $$
        \(\,\operatorname{P}(X=1) = 0.5\)
        `,
    
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
        "true": "B",
        "explanation": String.raw`
            В общем случае Д.И, для \( \beta  \): $$ \hat \beta \pm t_{n-2, \alpha / 2} \cdot \text{s.e.}(\hat \beta)$$
            Доверительный интерар для \( \beta_0 \):
            $$ 23 - t_{stat} \cdot \text{s.e.} (\hat \beta_0) = 23 - t_{stat} \cdot 5 \Rightarrow t_{stat} = 1.8 $$
            Доверительный интервал для \( \beta_1 \): 
            $$ \hat \beta_1 \pm t_{stat} \cdot \text{s.e.} (\hat \beta_1) = 10 \pm 1.8 \cdot 2 = [6.4, 13.6]$$
        `,
    
    },
    ]
init_question();var result_array=new Array(questions.length);