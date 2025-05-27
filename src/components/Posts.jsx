import { SlOptions } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import img from "../assets/images/profile-removebg-preview.png";

const Posts = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full mx-auto mt-4">
      {/* Post Title */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center space-x-2">
          <img src={img} alt="Profile" className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer" />
          <h1 className="font-semibold text-black cursor-pointer">Zeko</h1>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <h2 className="text-sm">44m</h2>
          <SlOptions className="cursor-pointer" />
        </div>
      </div>
      {/* Post Content */}
      <div className="my-3">
        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFxgVFhUVFRUVFRUVFRUXFhUVFRUYHSggGBolHRUVIjEhJSkrLy4uFx8zOjMtNygtLisBCgoKDg0OFxAQFi0dHR0rLS0rLS0tKysrKysrLS0tLSstLS0rLS0tKy0tLS0tLS0tLS0tLS0tLTc3LS0tKy03Lf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xAA3EAABAwIEAwYFBAICAwEAAAABAAIRAyEEEjFBBVFhBiJxgZHwEzKhscFC0eHxI2IUUgdyshX/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACIRAQEAAwADAQACAwEAAAAAAAABAhEhAzFBEiJREzJhBP/aAAwDAQACEQMRAD8A+RtCkF4CpKiQ2FCusEqWkYVpg6iMDJbkpDEFGdUSz3SU9LFfimJSi26ssS2yUpNU6eensL0hcV5KwpBqLSahh1kWm05SehG2pBj90LdNrY7qQABc4Nm4ncAwSOeh8Ut8RsiCL6QQdpg9fyDyK9PC3vN3d431ufD91V47BupOEzHPrrbkPe8JP1TfmLloUXhQw9XMJUyqp66jTYiQpUwucFmcAg11Jz0Co5YZCz0fD4fN+prb5bzr5dY63sChZ4N7WsTMCRZ0b8/TXRdw/C1KhlsjwsL7W58lK5f0pJ/YvwS0w4RadQfsmKLVzWOByPvsDyP8o2HYnxuyZzRqjTRTSRsOxFLVTSaqrUVWYti0NamqfiDULDSqVzUN4RnIbgkOCisprwMTdIISMG2kncPTUaYCepsTSBalSYj5UFhR2p4nQajUu4J57Us5iDKKV6CvJXJFBA5O4WskJRcO66LaXWeVINQ6ITLGpyBPpyFW1BBV78OyqcYyChRhNzlwchvK8aUhjLFoOH4QfDDieZHn4joPVUGFEkCYkxJ29Fs8NQihB1H22SeS8PhGbrYuHZLA8xtyE/x+6cxOF+NTIIkxY9evqqbiLniqG8zA+kCf5Ws4JQGUOJvGhPLcToh8G+2Lw3ddBaZBIib76nc/kdVY4ai6oe6JAMEjTx8wp9o8FleXtJM949IvIjWyVwfEPg1MwPdqZSYIgERrOyEys9DcZVxhOFVHODSIvE8o9lMYjgT28yemlxP3CHhu0Q7352mCfC8+qsHdoYAi4BAnT5rz01j1S3y5N/jjP4zhdZhgtP8AfNJU6YIJcYAmdo+WJPWTA6ellxbtAaoyMHedebCLCZv0tzgcoST6Tn5aTBbfkTPPpKP7ozCAYXCnEVQ2e6DJO9uq0VZraYAbZotcWMeHmrXhPBhSoGB/kP6iCb8lleK1KpflLHC/Iw4+aOPS32ucNQDwS4A8iZ2FjdJinDiORP3V7wfBnJLtYuJ0tIA6wfqqKvLXuB5n6mUfFe0vknDtIWXj3JdteAoPrLpR0O50qox4TprJDFuQoxU1GocJrKoupJFAAEVhUHCFzCgxyiE60pKi5MByaFo7UzSSTXplr00JTJAQHgLw1EB1RYFCuCi0qQCmq9U6ViuDUWmy6wrnh7JCs6VFI8M2V6ynZUiVLmjZVHEKK0RCqOItstWjM1hdCaUfFapYaqap7BzmEaythhqziwuNpsQbX/7LKcJPfG/8iLLUsxzGUjmcAST0PiQoeW3auE4yfHqwJiMzg6AIkHYgjxmy0WExn+IPhzCBeSLmNydeUm6x3FK/xHmNJJ8USm99RmUSGtgEgT4WHh9E3wNO4txZ1VxnQG2mkEEEeYv09PKbQ8Au0G51JLeusXA8AmBgWU3gNHxgdTBOVw6Cx0PNNVakyNut4vsPeqG/6FVmx3/E6ge+SK2XG+4205R+fRGq0++20j5o2vfbb9k1Vow0C2hnQc7A+f0QEriKnwIyiS4SeZ1nynbohcGxjm1ASSb/AHTYfTuKl23ABlsSP0kD30VdVwL2RUb8rj3QfmgbrT/rV9Oo48GmDNovAJ+yyWK4wKuIyhpY1l25pBc8TdwPl6Jen2hLaeVo75EXmG9banoqbBVcr8zhcnf7ozei/X0LD4nJTkCRFzPPWd91neI4jNULhoryljGOoBtrwMpsfE7rPV6/xCbQWwI1Q8V/kOc/i8bVUH1kMtIQKq6doaGfXUS6UoCphyGx0mQvHFcSoOMrMDUCgAiuC8DUBSYUwxyGxqMxqMCjMRmhBARAYTErnuSznIrygLVlWwIwCExGalOm0I1NDCLTRZccMC0lAWWa4e660mFdZNE6k9qqsc2ytaz1XYzRFmTxzbpIhWePF1XuClVYcwj8rc2cNgnqbAHSdEtiMX8QRIJLogGJ0hxAAbF+e19p8ZVyuaA3NmkEWmDYagiRrunSynTJIiYE8hAAAkxMka/7FSs7tWXhF+Fy2JB3lp+l9+idwVDNDWhw+piJm0eiSwbDVqgbXnXrHpb0Wu4bRyiADzzGIj9OgMe9VqAWE4LlBzEGHH5SDtcWbvb2bIcSwobv3Z1gmGxy8fXotRTI1bBvAOwkzJ5bfwqrjFMQc1uc8iLDTl9uiTYqDDPMzEW1Om4gJ/D0y8mB5TJF5EdfxMcwKm5oIAiY5xNgSZ9Lq54fBvMEkEm+x1kRGg5/tqJWrwIOl0kaAd2Cff4Va/BvpuDok8oOmk3utm4CJytzEHTWARF7HSPqq/GC06g6agzyJBC0rMjiMNIztFx8wEk85JPjqgOBLc3L3cqy4rhw0h4BMzckHyBGvig4B7CQ02vaZLfMD9im+AhhOI5RAsOYgn62ReHm7nXud4+wSHGMP8OpDRqfWTbu3jkn8H8mYRfkITYTuwyvBMQ9IVHo9ZyUcVWpRwRGobVOUBTIXgapUbpk0kQJFq9a1GexSYxZnU2ozWrwBTBRCoheuKi4qEolekrzKvQ1ShZlO1FYhIjUpxWorQhNRmFZj+Cer/B1rLM0Xq2wlVNCVavqJPEvspOel6hTApceFWjVWmPCSw1LM6CYG/gpZK4pYagXOsTMGAIsHCHEHwsh8SgdxoIOriYJnxVtR7sloA8RJygbnbw8FSYmoXOkybz75KcUomHd8NpLdSNet/p+51RqHxiM5qZAbjQTH0hC4VSNZ4pTDdXRybyOy0HGez/wiytRaXtpm7Ab5YPebO4lC1lt2UxRILXQSL5joQdcsD6eCV7X1YNOYktJdYRAIj8mVmOGY9tOq0MzmS7Nm7pgiRadQRKdx9Q1a8mTlAbFjIIkCd9XfTzW49GUlTqFxIH6QSD6QTvf3utp2RZNJz4zQ/L4WAn7dViQ7vOtF40tafrP2Wk7K8Q+FQfmtLybcu6LDyWynBix7S1ixw+G1oLgQRmiQJv4T4LPYjjD2gMqsjk6SWj0uNUpj+K/8hxcawYGugB4iaYAg21JOYx4eJdwPAq1dj3iBTk/DFQHNE2drI81pNTob2X4pXzMNwSIMiOltVX4ajmdodLxE2vIUz3M1NwOcS0gERNovyIMo2D7jhmIOguIg6tNxZP8A5xDhTqlIPsbwDoSIgS0+CSwktYWOsW7X/K19Qh9ENkEZdBz268ll+IZgASD5+W6XG9HW4UqlLlEqFBc9WSSBXrUHMmKAusxzC05TrmWXuDpI1ZieEt6SZRXtRkJxrEtiCsxcBTY1SaxGY1BqE+mhGmnXBAejoAw1RKmokLMpAVNhQZU2pFB2lGaUs0ozCiw2aE/gqqrCU3hLlYti7a+VGFKgxHFNUIpccxJYHD5nx7nby99Vc46jZL8DYTULb3H9qXk5FcC+JDLD5ndNRtIAGkyjYLso+rcuIbMA5Zvtrr/ACmThCaoimQ2RJMER796r6RwrCjI0N0Ec4tyP58lH9aUfO28FdgqrWkzIF9pPgranxBs5TOYNk66TotR2w4OKpYQLjcck5huyNN7A51nAXO5OxPNC9GPn3E8Kytlc1sEEZYjWZ+xKWq8NcyZMkwYE2EDSNTZq1+E4cBWcwCQyQDBtcg363SfH2iCAbwR7hS/WslPzxlBw0uMi95cbfqH9eqniOGVAG03EAcwI1O/XT0Wg4HhINzPj5K/4hgmGm4uHhAi5Ajw9dkMvJ3QzFleE8FwzIbkbnEXIzTa592uFb4jGNDSA8Cdr8osAnOG9l34jvNMFpE6wdbTqJBUeM9jXUJqNgwLxJIMbTOnhyVJ0lfN+MYCo6q57Gk6E6aR0J6WQDh6jYLgCCA2Oc3AvuJ20X2bsHwf/C91TM4uOroJ/g9F3aLgdM0iconpA7o8dCL+5h5n8LcXz3h2MLY3keYJsQdibcvW6BXwxqkUjImSJv11j6dU5gcH3nZZ7riAYgzPqJhWlGofjNJaIEEkGQeRjn4JM7r0OLAYqkWOcwm4JGsz5pKot9284NTEV22J1gWPLwWGqMVcMv1NkymgmBWOCp3STGKzwSpCVaUhAXEqAevMydMV5skHvkqeIr2SlN10LRkOUwmGNQqDU1lRLQnpZ4TNQIRasxcqOZSqlKuesKoapgoIKnKmqK0ozUBiO1EBGhWGBakmBWGBF0YFX+Fp2TQorzh7bJ7IqJqPHU7KswFqvT79FocdSsqNpcHd0Aknfop+T0fD2t+K0y4AmIAzGSRYGRbxv4ALYdieJfGoidR3drRy9jVfPMRWc75zIMA31I1J8I9wlOE8Tr4epmY4BpMHcEAmR99OS55OLfX25wBgQInU3k81a0haFkOEdo21Q0ZSDAMHX+VqcNXBOu0pJTqLG4cUGOdqXkuJ3Ow+0rB8Ur97vbn3919B7W0+6CdNo1J5Rusxh+zZz0qmIcwU3FpLA8CpkOruQAFzebaJcfHcqbLOSEODPa1wgk381tqmD+IwgbjyuqGtwSgKsYWo+o0WJMfOCPl0zAyLgLW8HoOFKHC+x/lJnhZkbHKWGezmA+FSM7k9en2iyexNBtRpBvOvvmvRUysQKuJytn15+iffC6Qw1BtMZWiB00PiFme2fFW0WETY3y7k+4RuPdp6OHYSagnYa+o15aL5NieP1MTXzvuLgA/KJ+3vqm8eNvS534tOG4oZi/UazyJ/SR5b8tZuinEt+KHggiYy8uYvp/HWFVVsQGgNLcjidf0ncSJsf75JCjUIcZIOUW8txz3smuJZW9qYhtWiWmCNpAIFuRlfP+IYJjHFrJJ66DoOa0HDMVmiDbXqPHnf7R1UuOUCzvta05jBPeJ8L6eS3i5dNn1k20ERllYmnImPpCr6wgrqQGY5dWqKFNBxD1h0G98ouHagManKIQjU5RTIQKaME6VdlS+ICZc6EpWctWI1npQlM1gliEpoqgpBRUlNURhTNNKsTVIoxjdNqsMAEjRCewRumhK1HDxZWbGKt4YVcsanISxGHLrBI1OBOEujY+uy2vDuHD5t1X8drlvdaLGx5BRzz+LY4fXzPEEUzlfedNhqNfv5KGNaHOaQ4XAsNGtEEge9ldcf4fTLZ31J5/sFlmsO1zOolTlUsfQuwWJAcWkiTYTIsN/O1rQt9hqk1TJbcAgBwJi8a9RzXxfs9jDTcBAMHfnrdbmnxl4qUsQC7JAZVaJsxw+Yf+pvzsQlvsYQ/wDNmOqt/wCM1jnBhDyYJBzNLIkjo4+i+Z4PjNem9r/iOdlLTDnOIOXRpvMRZfV//I1JmIw+UvyuBzscbtJi4JuYI36Ar5E7APFiB5Oa4erSQq43nE8purXgvajE0MR8enLnEzkLnlh5NiZiCQPH1/Q+Eru+G3NGcwSBoT+oATovz/2O4W0Vm1az2taxwc1mZpdUcDLRlEkNkCSV9r4fxEFoIPmSd+Z/Tca+CGfRx4Z4lXLGOJIAHi7lYEmIRMLVaaYJG0zFxP8A2B3WN4vxKpjsS2hSDhQpu/yOn5iNp5ed46Ky7Q8ZFKmGNMWgE6np76rnyndLS8YntRSp/GcXzBk333hv1/lUNLhjpLmDum4N5v8Az9UTiPEPivBMlkzHQ3NiiVONkDK1sNGhjax+/wD9K3ZOJux1EgRmmQHAmSI0sduUfTdVQmRl+Y2I1g9N1YHFF8yAJv8A1/KBhMKXukWv6jpbTRDYrrhNCQ2bEG8Wnw5LRYnDU3Nu0ONo0vv1SGAqhoA18Y/tOAZjDZAN4mJ8D56KUvRsUeMpZed9p9lUuLbdXnFKcVi1uwk97ptP2SVXAvIkiB4Lsxy3HPZqq2mFCpTkpgN2U2U0wF6dJGbTTDaSmGIltDYIRmr1rFM00SguCWqhOkILqazK6q1Llisa1NAyIaFnCuCmWrwBSWTYExTCExM0gmgGKTk/gzdIMamcO6CmLWs4Y5aDBNlwAWX4bUWr4H80rZXUDGbq7xGJyNggrO8WktJmd1dcSq5hCocQYGWATsTdcroZ7FZnMMgDkNzCy1dobUiY9/VavEDUETGpm3hCra3CviDM3TaJ9lCCSyhhFzBuDpO8rScG4hlOogjfnv8AY/RUOIoOyAHUaAR+fBV4xTrNBiDN9jrfmJW9s+nMyvhrmhzYNjESPcf2lq/Z/C1tG/DO4vHoHCNRcclmeF8Tc2xPOXAyAYF56iB5dVqMNWzjM2JaZM/jxU7csfRpJfZrB9kcI0ZgC88yTNttSeW6cytY4MaZnY3Hgfr9UqXFtwY89D47LwZnOBcLtuOdtRI6SkueWX02pD2IYQyQY5AACf8AUrDdpsSXHI+LBpHk134JWr4ni4Y8g/8AaI5zH4K+bcYrPNTM83kQeekT0un8eJcqhVZBgC5DSZ5xJ9JCM3BZrxvYiOdykKUkyZImT+/8LT8GAy6WOh1H06/dVt0VXDBgW12mLdLJ7h1HKI2k/KfvyKYFFtQuaxwIOsQ4tm/yzMT6KeHo5HZMuX6T1j2UmXpoZZh4gt39POETFvdTbcB3KCNeQzFe06hFjMj37/KT4ljfiHKAe7/sL8tQYOqSTprSNSv/AJabiAC/UGHaRclbqjhWVaYbAFrwvn3Ezam+5IMOOkePPxWy4TjT8IZbnTwV/iZDinZiJLFnjhy0wQvqGEENh95WQ7S0IqSBAVfHlU85pny1eQikKCsklSRCEOVIFYEXMXhpogUy1FlfWagimrB9JQyLBtjCuDV6ApAKSzxqaolCa1SaVmOsKmAg0SmQmKt+HVFqOCYmHLH4F60OCMQeSn5rrE3jm8msqFK1sPmC9wmIDgmQQFzS7XrJcRolrm3LWjlAurWg2WfpvqYb9UDtBTNnj9N76LzhmNZUYLku6a+WiYAsRg23IZPNxiBz8Vj+M4SH678rR4L6DUcMuUC/IX9SqDHcLnvOieQ293U96pozlGiIGR0ixIMbGdJ+vVW+ExT5IvYgeunvxVfjcMBoSP02sARz9F5h6uV4FybET/qUfYt7QqgjKeYA66AIjK4Yy+x/ePos/h8cC29oIPlp9/sEPGYzM1xc6BEgTvyjz+qSTog8b4lADGmZ0PIayI3lxt4rO4iuXd50utAEQ2f2v9l7iSHO8fzN/ogGRAjW0Ej1iVaQp2mxurpH+gbv1O6u+zrwWlrh3jpbmqjh1FxcBMT520nqtNhcAGkPbrGhH6hofFLWRr8Ia6oKjJY6wcQdTsY+idqYWB33CQLHY+K8qVMxL4LbC145T5QPBCxtaGyTI0Nx63vstQAxdQikW2kgw4XA5dR+yp8HSBIEu5k3F+U7f0madbJ8lyTcHaTcev5TlBgyk2BIkQTeDp9r9VhU3FqYL2NLoBMZZ36+f3Wr4HgsrRlOiylMfExMbAT+612B1hu2qp8JVvQeS650Vb2noGMxPkrSnQGu6qu0+LDWwU2F6XL0ylQpcvUalWUA1F0oG2uRQUmxyaa5ZhWIwS7HomdEHPKWfUuvcRVSDqt1m0zykxcuU1RJU2sXi5YDNNqYXLkxabwGq0+HpEMlcuXL/wCm8i3h90bh+Kh0FXrKkrly58KtlCPEG5pB0WHxeKfQqH4c5TykSZuLXOq5cqYdtC+mq4XjBkBJuQDcGB6r2uc5jPE+X1XLkuUaUpjsIwd1sHn9FneMYU3cNt+i5ckwvTEf+c4C19p8EP8A5DnnvCftP5/lcuVyphw3EzF9Dbl6j0R20C+TFxe1un7fVcuWrLzB4UMotqE95158zb6e4TY+NSc12clrrOm8bgifMeYXLksATFcQYBqe6bkDn0HgqbG4h1VoyNIa69zrzHnyXLkWWH/54aDAILYuTa0ESFUYnjESWzFxyhx1hcuRkYTsvSBJrHW48lseCGSTO65cmBdEwsT2vxkujkuXLYf7Fy9MwaiH8ReLl0pGaNRNNqLlyJa4VF6ay5csxWtUSpcVy5Zn/9k=' alt="Post" className="w-full h-64 object-cover bg-gray-200 rounded-md cursor-pointer" />
      </div>
      {/* Icons */}
      <div className="flex justify-between items-center py-2 border-b">
        <div className="flex space-x-4 text-gray-600 text-xl">
          <FaRegHeart className="cursor-pointer hover:text-red-500" />
          <IoChatbubbleEllipsesOutline className="cursor-pointer hover:text-blue-500" />
          <FiSend className="cursor-pointer hover:text-yellow-500" />
        </div>
        <div className="text-gray-600 text-xl">
          <FaRegSave className="cursor-pointer hover:text-green-500" />
        </div>
      </div>
      {/* Post Description */}
      <div className="py-2">
        <p className="text-gray-800 text-sm">Bu, nümunə bir post açıqlamasıdır. Burada post haqqında məlumat yazıla bilər.</p>
      </div>
      {/* Comment Count */}
      <div className="text-gray-600 text-sm py-2 border-b">14 Comments</div>
      {/* Comment Input */}
      <div className="flex items-center space-x-2 pt-2">
        <img src={img} alt="Profile" className="w-8 h-8 rounded-full bg-gray-300" />
        <input 
          type="text" 
          placeholder="Write a comment..." 
          className="dark:text-black w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default Posts;