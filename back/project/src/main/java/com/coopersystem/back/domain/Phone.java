package com.coopersystem.back.domain;

import javax.persistence.Entity;
import org.springframework.data.mongodb.core.mapping.Field;


@Entity
public final class Phone {
	@Field
	private Integer number;

	public Phone() {
	}

	public Phone(Integer number) {
		this.setNumber(number);
	}

	@Override
	public String toString() {
		// return "Quote{" +
		// "id='" + id + '\'' +
		// ", book='" + book + '\'' +
		// ", content='" + content + '\'' +
		// '}';
		return "";
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	@Override
	public boolean equals(Object o) {
		// if (this == o) return true;
		// if (o == null || getClass() != o.getClass()) return false;

		// Quote quote = (Quote) o;

		// if (id != null ? !id.equals(quote.id) : quote.id != null) return
		// false;
		// if (book != null ? !book.equals(quote.book) : quote.book != null)
		// return false;
		// return content != null ? content.equals(quote.content) :
		// quote.content == null;
		return true;
	}

	@Override
	public int hashCode() {
		// int result = id != null ? id.hashCode() : 0;
		// result = 31 * result + (book != null ? book.hashCode() : 0);
		// result = 31 * result + (content != null ? content.hashCode() : 0);
		// return result;
		return 0;
	}
}
