questions = [{
    "question": String.raw`Случайные величины \(X\) и \(Y\) независимы и имеют нормальное распределение с 
    \(\mathbb{E}(X) = 0\) , \(\mathbb{D}(X)=1\) , \(\mathbb{E}(Y)=5\) , 
    \(\mathbb{D}(Y) = 4\) .  Величина \(Z = 2X + Y\) имеет распределение`,
    "answers": {
    
            "A": String.raw`
                $$N(5;5)$$
            `,
            "B": String.raw`
                $$N(5;8)$$
            `,
            "C": String.raw`
                $$\chi^2_2$$
            `,
            "D": String.raw`
                $$t_2$$
            `,
            "E": String.raw`
                $$F_{1,1}$$
            `,},
        "true": "B",
        "explanation": String.raw`
            $$ \mathbb{E}(2  X + Y) = \mathbb{E}(2 X) + \mathbb{E}(Y) = 5 $$
            $$ \text{Var} (2X + Y) = 4 \cdot \text{Var}(X) + 2 \cdot \text{cov} (2 X, Y) + \text{Var} (Y) = 8 $$
        `,
    
    }
    ,
    {
    "question": String.raw`Оценка $$T_n = T(X_1, X_2, ..., X_n)$$ называется несмещённой оценкой параметра \(\theta\), если`,
    "answers": {
    
            "A": String.raw`
                $$\operatorname{E}(T_n) = T_n$$
            `,
            "B": String.raw`
                $$T_n = 0$$
            `,
            "C": String.raw`
                $$\lim_{n\ \rightarrow \infty} \operatorname{P}(|T_n - \theta|> \varepsilon) = 0  \forall \varepsilon>0$$
            `,
            "D": String.raw`
                $$\operatorname{E}(T_n) = 0$$
            `,
            "E": String.raw`
                $$\operatorname{E}(T_n) = \theta$$
            `,},
        "true": "A",
        "explanation": "Несмещенная оценка не смещается.",
    
    }
    ,
    {
    "question": String.raw`Оценена регрессия \(\hat Y = 300 + 6W\), где \(R^2 = 0.85 \) и \(W_i = X_i / X_{i-1}\).  
    Если объясняющая переменная будет выражена в процентах, $$\tilde W_i = 100(X_i - X_{i-1})/X_{i-1}$$, то результаты оценки регрессии примут вид`,
    "answers": {
    
            "A": String.raw`
                $$\hat Y_i = 3 + 6 \tilde W_i$$, $$R^2= 0.85$$
            `,
            "B": String.raw`
                $$\hat Y_i = 300 + 600 \tilde W_i$$, $$R^2= 0.85$$
            `,
            "C": String.raw`
                $$\hat Y_i = 306 + 0.06 \tilde W_i$$, $$R^2= 0.85$$
            `,
            "D": String.raw`
                $$\hat Y_i = 300 + 6 \tilde W_i$$, $$R^2= 0.085$$
            `,
            "E": String.raw`
                $$\hat Y_i = 300 + 6 \tilde W_i$$, $$R^2= 0.85$$
            `,},
        "true": "C",
        "explanation": String.raw`
            $$ \tilde W_i = 100 \cdot \frac{X_i}{X_{i-1}} - 100 $$
            $$ \tilde W_i = 100 W_i - 1 \Rightarrow W_i = \frac{\tilde W_i + 1}{100}$$ 
            $$ \hat {Y} = 300 + 6 \cdot \frac{\tilde W_i + 1}{100} = 306 + 0.06 \tilde W_i $$ 
        `,
    
    }
    ,
    {
    "question": String.raw`Оценка ковариационной матрицы оценок коэффициентов регрессии $$Y=X\beta + \varepsilon $$ пропорциональна`,
    "answers": {
    
            "A": String.raw`
                $$(XX^T)^{-1}$$
            `,
            "B": String.raw`
                $$X^TX$$
            `,
            "C": String.raw`
                $$(X^TX)^{-1}$$
            `,
            "D": String.raw`
                $$XX^T$$
            `,
            "E": String.raw`
                $$X^TY$$
            `,},
        "true": "C",
        "explanation": String.raw`
            $$ \beta = (X^T \cdot X)^{-1} \cdot X^T \cdot y$$
        `,
    
    }
    ,
    {
    "question": String.raw`Среди предпосылок теоремы Гаусса-Маркова фигурирует условие`,
    "answers": {
    
            "A": String.raw`
                $$\operatorname{E}(Y_i)=0$$
            `,
            "B": String.raw`
                $$\varepsilon_i \sim N(0;\sigma^2)$$
            `,
            "C": String.raw`
                $$\operatorname{E}(\varepsilon_i)=1$$
            `,
            "D": String.raw`
                $$\operatorname{D}(\varepsilon_i)=const$$
            `,
            "E": String.raw`
                $$\operatorname{D}(\varepsilon_i)=1$$
            `,},
        "true": "D",
        "explanation": "Также называется гомоскедастичность",
    
    }
    ,
    {
    "question": String.raw`Оценено уравнение парной регрессии \(Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i\), причём МНК-оценка
                коэффициента \(\beta_1\) равна 5, а стандартная ошибка оценки равна \(0.25\).
                Значение \(t\)-статистики для проверки гипотезы, что этот коэффициент равен 4, есть`,
    "answers": {
    
            "A": String.raw`
                $$-4$$
            `,
            "B": String.raw`
                $$4$$
            `,
            "C": String.raw`
                $$2$$
            `,
            "D": String.raw`
                $$20$$
            `,
            "E": String.raw`
                нет верного ответа
            `,},
        "true": "B",
        "explanation": String.raw`
        $$ t_{stat} = \frac{\hat \beta - \beta^*}{s.e.(\hat \beta)} \sim t_{n-2} $$
        $$ t_{stat} = \frac{5-4}{0.25} = 4$$
        `,
    
    }
    ,
    {
    "question": String.raw`P-значение при проверке некоторой гипотезы \(H_0\) оказалось равно \(0.002\).  
    Гипотеза \(H_0\) не отвергается при уровне значимости`,
    "answers": {
    
            "A": String.raw`
                10%
            `,
            "B": String.raw`
                0.1%
            `,
            "C": String.raw`
                1%
            `,
            "D": String.raw`
                5%
            `,
            "E": String.raw`
                всех перечисленных
            `,},
        "true": "B",
        "explanation": String.raw`
            \(H_0\) не отвергается, если \( \operatorname{p-value} > \alpha \)
        `,
    
    }
    ,
    {
    "question": String.raw`Известно, что выборочный коэффициент корреляции между \(X\) и \(Y\) равен \(0.25\). 
     В регрессии \(Y\) на константу и \(X\) коэффициент \(R^2\) равен`,
    "answers": {
    
            "A": String.raw`
                $$25$$
            `,
            "B": String.raw`
                $$0.25$$
            `,
            "C": String.raw`
                $$0.5$$
            `,
            "D": String.raw`
                $$0.0625$$
            `,
            "E": String.raw`
                $$\sqrt{0.5}$$
            `,},
        "true": "D",
        "explanation": String.raw`
            $$ R^2 = \text{corr}^2 = 0.25 \cdot 0.25 $$
        `,
    
    }
    ,
    {
    "question": String.raw`Исследователь оценил регрессию \(\hat Y_i = 90 + 3 X_i\). 
    Если увеличить переменную \(X \,\,\,\)на 10%, а \(Y\) — на 10 единиц, то`,
    "answers": {
    
            "A": String.raw`
                оценка коэффициента \(\,\,\beta_0\,\,\) уменьшится, а \(\,\,\,\beta_1\,\,\) — увеличится
            `,
            "B": String.raw`
                оценка коэффициента \(\,\,\beta_0\,\,\) увеличится, а \(\,\,\,\beta_1\,\,\) — уменьшится
            `,
            "C": String.raw`
                оценки коэффициентов \(\,\,\beta_0\,\,\), \(\,\,\,\beta_1\,\,\) не изменятся
            `,
            "D": String.raw`
                оценки коэффициентов \(\,\,\beta_0\,\,\), \(\,\,\,\beta_1\,\,\)уменьшатся
            `,
            "E": String.raw`
                оценки коэффициентов \(\,\,\beta_0\,\,\),\(\,\,\,\beta_1\,\,\) увеличатся
            `,},
        "true": "B",
        "explanation": String.raw`
            $$ \hat \beta_0 = \bar{Y} - \hat{\beta_1} \cdot \bar{X} $$
            $$ \hat \beta_1^{new} = 
            \frac{\widehat{\text{cov}(X^{new}, Y^{new})}}{\widehat{\text{var}(X^{new})}} = \frac{1.1}{1.1^2} \beta_1 $$
            $$ \hat \beta_0^{new} = \bar{Y} + 10 - \frac{\beta_1 \cdot \bar{X}}{1.1} > \beta_0$$
        `,
    
    }
    ,
    {
    "question": String.raw`Исследователь оценил регрессию \(\,\,\hat Y_i = \underset{(0.1)}{30} + \underset{(0.5)}{6} X_i \,\,\), 
    причём \(\,\,\sum_i (X_i - \bar X)^2=4\,\,\). Все предпосылки теоремы Гаусса-Маркова выполнены.   В скобках приведены стандартные ошибки коэффициентов.  Несмещённая оценка дисперсии ошибок регрессии равна`,
    "answers": {
    
            "A": String.raw`
                $$0.25$$
            `,
            "B": String.raw`
                $$2$$
            `,
            "C": String.raw`
                $$1$$
            `,
            "D": String.raw`
                $$0.125$$
            `,
            "E": String.raw`
                $$2\sqrt{0.5}$$
            `,},
        "true": "C",
        "explanation": String.raw`
            $$ \hat \sigma^2_{\varepsilon} = \frac{RSS}{n-2}$$
            $$ \hat \sigma^2_{\hat \beta_1} = \frac{\sigma^2_{\varepsilon}}{\sum (X_i - \bar{X})^2} 
            \Rightarrow \text{s.e.}(\hat \beta_1) = 0.5 $$
            $$ \sigma^2_{\varepsilon} = 0.25 \sum_{i=1}^n (X_i - \bar{X}) ^2 = 1$$
        `,
    
    }
    ,
    ]
init_question();var result_array=new Array(questions.length);