package com.coopersystem.back.domain;

import javax.persistence.Entity;

import org.springframework.data.mongodb.core.mapping.Field;


@Entity
public final class Address {
	@Field
	private Integer CEP;
	@Field
	private String streetAddress;
	@Field
	private String neighborhood;
	@Field
	private String city;
	@Field
	private String uf;

	public Address() {
	}

	public Address(Integer CEP, String streetAddress, String neighborhood,
			String city, String uf) {

		this.setCEP(CEP);
		this.setStreetAddress(streetAddress);
		this.setNeighborhood(neighborhood);
		this.setCity(city);
		this.setUf(uf);
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

	public Integer getCEP() {
		return CEP;
	}

	public void setCEP(Integer cEP) {
		CEP = cEP;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getNeighborhood() {
		return neighborhood;
	}

	public void setNeighborhood(String neighborhood) {
		this.neighborhood = neighborhood;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
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
